import createMealLike from './createMealLike';
import getMealLikes from './getMealLikes';
import mealCommentCounter from './mealCommentCounter';

const mainDiv = document.querySelector('#meal-items');
const btnClose = document.querySelector('.close-btn');
const mealRecipeDetails = document.querySelector('.meal-recipe');

const mealLikesCount = (target, mealLikesArray, numOfLikes) => {
  mealLikesArray.forEach((obj) => {
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

    const mealLikes = document.createElement('div');
    const numOfLikes = document.createElement('small');
    numOfLikes.innerHTML = '0 likes';
    mealLikes.appendChild(numOfLikes);
    listItem.appendChild(mealLikes);

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment', 'mb-4', 'mt-2');
   
    // modal content button container
    const cmtButton = document.createElement('button');
    cmtButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'comment-btn');
    cmtButton.setAttribute('id', `${data[i].idMeal}`);
    cmtButton.setAttribute('type', 'button');
    cmtButton.setAttribute('data-bs-toggle', 'modal');
    cmtButton.setAttribute('data-bs-target', '#staticBackdrop');
    cmtButton.innerHTML = 'comments';

    commentContainer.appendChild(cmtButton);
    listItem.appendChild(commentContainer);

    // Reservation button
    const rsvButton = document.createElement('button');
    rsvButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'reservation-btn');
    rsvButton.setAttribute('id', `${data[i].idMeal}`);
    rsvButton.setAttribute('type', 'button');
    rsvButton.setAttribute('data-bs-toggle', 'modal');
    rsvButton.setAttribute('data-bs-target', '#staticBackdrop');
    rsvButton.innerHTML = 'reservation';

    commentContainer.appendChild(rsvButton);
    listItem.appendChild(commentContainer);

    foodDiv.appendChild(listItem);
    mainDiv.appendChild(foodDiv);
    
    const mealLikesArray = await getMealLikes();
    mealLikesCount(likeBtn, mealLikesArray, numOfLikes);
    
    likeBtn.addEventListener('click', async (e) => {
      await createMealLike(likeBtn.id);
      const newMealLikes = await getMealLikes();
      mealLikesCount(e.target, newMealLikes, numOfLikes);
    });
  }
};

// post a comment for the meal
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

const getMealComment = async (item) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${item.idMeal}`;
  let myComment = await fetch(url).then((response) => response.json());
  const ul = document.querySelector('#list-comment');
  ul.innerHTML = '';
  const h3 = document.querySelector('.comment-count');
  h3.innerHTML = `Comments(${mealCommentCounter(myComment)})`;
  if (!myComment.length) myComment = [];
  myComment.forEach((comment) => {
    ul.innerHTML += `
      <li class="d-flex justify-content-start align-items-center">
        <p class="me-3">${comment.creation_date}</p>
        <p class="me-3">${comment.username}</p>
        <p>${comment.comment}</p>
      </li>
    `;
  });
};

// Meal comments section


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
