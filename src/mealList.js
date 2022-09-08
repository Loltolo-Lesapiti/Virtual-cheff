import createLike from './createMealLike';
import getLikes from './getMealLikes';
import commentCounter from './mealCommentCounter';

const mainDiv = document.querySelector('#meal-items');
const btnClose = document.querySelector('.close-btn');
const mealRecipeDetails = document.querySelector('.meal-recipe');

const likesCount = (target, likesArray, numOfLikes) => {
  likesArray.forEach((obj) => {
    if (obj.item_id === target.id) {
      numOfLikes.innerHTML = `${obj.likes} likes `;
    }
  });
};

const mealList = async (data) => {

  for (let i = 0; i <= data.length - 1; i += 1) {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('col-lg-4');

    const listItem = document.createElement('div');
    listItem.id = data[i].idMeal;
    foodDiv.setAttribute('data-id', `${data[i].idMeal}`);
    listItem.classList.add('meal-item', 'text-center', 'card', 'shadow', 'mb-4', 'border-0');

    const itemImage = document.createElement('div');
    itemImage.classList.add('meal-img');

    const image = document.createElement('img');
    image.src = data[i].strMealThumb;

    itemImage.appendChild(image);
    listItem.appendChild(itemImage);

    const itemText = document.createElement('div');
    itemText.classList.add('meal-name', 'd-flex', 'pt-3', 'justify-content-center', 'align-items-center');

    const mealName = document.createElement('h3');  
    mealName.classList.add('fs-6', 'me-2', 'pt-1');
    mealName.innerHTML = data[i].strMeal;

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bi', 'bi-heart', 'like-btn', 'text-danger');
    likeBtn.id = data[i].idMeal;

    itemText.appendChild(mealName);
    itemText.appendChild(likeBtn);
    listItem.appendChild(itemText);

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment', 'mb-4', 'mt-2');

    foodDiv.appendChild(listItem);
    mainDiv.appendChild(foodDiv);
  }
};

const postComment = async (data) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

const mealModal = async (meal) => {
  [meal] = meal;
  mealRecipeDetails.innerHTML = `
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-meal-img">
      <img src = "${meal.strMealThumb}" alt = "">
    </div>
    <h3 class="m-3 comment-count"></h3>
    <div class="d-flex justify-content-center align-items-center">
      <ul id="list-comment" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3">Add a comment</h3>
    <form autocomplete="off" class="w-50 mx-auto">
      <input type="text" class="form-control w-75 mx-auto mb-2" id="commentator" placeholder="Your name">
      <textarea id="comment" name="comment" placeholder="Your comment..."></textarea>
      <button type="button" class="btn btn-secondary commentBtn">Comment</button>
    </form>
  `;
  // mealRecipeDetails.parentElement.classList.add('showComment');

  // const commentBtn = document.querySelector('.commentBtn');
  // commentBtn.addEventListener('click', () => {
  //   const username = document.querySelector('#commentator').value;
  //   const comment = document.querySelector('#comment').value;
  //   const itemId = meal.idMeal;
  //   const newData = {
  //     item_id: itemId,
  //     username,
  //     comment,
  //   };
  //   postComment(newData);
  //   document.querySelector('#commentator').value = '';
  //   document.querySelector('#comment').value = '';
  //   setTimeout(() => {
  //     getComment(meal);
  //   }, 1000);
  // });
  // getComment(meal);
};

const getMeal = async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('comment-btn')) {
    const mealItem = e.target.parentElement.parentElement.parentElement;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;
    const response = await fetch(url).then((response) => response.json()).then((data) => data);
    mealModal(response.meals);
  }
};

mainDiv.addEventListener('click', getMeal);
btnClose.addEventListener('click', () => {
  mealRecipeDetails.parentElement.classList.remove('showComment');
});

export default mealList;
