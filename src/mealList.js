import createMealLike from './createMealLike.js';
import getMealLikes from './getMealLikes.js';
import mealCommentCounter from './mealCommentCounter.js';
import mealRecipeCounter from './mealRecipeCount.js';
import resevationCounter from './resevationCounter.js'

const mainDiv = document.querySelector('#meal-items');
const btnClose = document.querySelector('.close-btn');

const mealRecipeDetails = document.querySelector('.meal-recipe');
const mealReseverDetails = document.querySelector('.meal-recipe-rs');
const btnCloseRS = document.querySelector('.close-btn-rs');


// const mainDivRs = document.querySelector('#meal-items-resevation');
// const mainDivRs = document.querySelector('#meal-details-resevation');

const mealResevationDetail = document.querySelector('.meal-recipe-rs')

const mealLikesCount = (target, mealLikesArray, numOfLikes) => {
    mealLikesArray.forEach((obj) => {
        if (obj.item_id === target.id) {
            numOfLikes.innerHTML = `${obj.likes} likes `;
        }
    });
};

const mealList = async(data) => {
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
        const resevationContainer = document.createElement('div');
        resevationContainer.classList.add('comment', 'mb-4', 'mt-2');

        const rsvButton = document.createElement('button');
        rsvButton.classList.add('btn', 'btn-secondary', 'rounded-pill', 'px-4', 'shadow', 'reservation-btn');
        rsvButton.setAttribute('id', `${data[i].idMeal}`);
        rsvButton.setAttribute('type', 'button');
        rsvButton.setAttribute('data-bs-toggle', 'modal');
        rsvButton.setAttribute('data-bs-target', '#staticBackdrop');
        rsvButton.innerHTML = 'reservation';

        resevationContainer.appendChild(rsvButton);
        listItem.appendChild(resevationContainer);

        foodDiv.appendChild(listItem);
        mainDiv.appendChild(foodDiv);

        const foodDivRs = document.createElement('div');
        foodDivRs.classList.add('col-lg-4');
        foodDivRs.setAttribute('data-id', `${data[i].idMeal}`);
        foodDivRs.appendChild(listItem);
        mainDiv.appendChild(foodDivRs);


        // eslint-disable-next-line no-await-in-loop
        const mealLikesArray = await getMealLikes();
        mealLikesCount(likeBtn, mealLikesArray, numOfLikes);

        likeBtn.addEventListener('click', async(e) => {
            await createMealLike(likeBtn.id);
            const newMealLikes = await getMealLikes();
            mealLikesCount(e.target, newMealLikes, numOfLikes);
        });
    }

    const mealCount = document.querySelector('#meal-count');
    mealCount.innerHTML = mealRecipeCounter(data);
};

// post a comment for the meal
const postComment = async(data) => {
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


const getMealComment = async(item) => {
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
const mealModal = async(meal) => {
    [meal] = meal;
    mealRecipeDetails.innerHTML = `
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <div class = "recipe-meal-img">
      <img src = "${meal.strMealThumb}" alt = "">
    </div>
    <div class = "recipe-instruct">
      <h4>Instructions for making</h4>
    <h4 class = "recipe-category">${meal.strCategory}</h4>
      <p class="text-center mx-5">${meal.strInstructions}</p>
    </div>
    
    <h3 class="m-3 comment-count"></h3>
    <div class="d-flex justify-content-center align-items-center">

      <ul id="list-comment" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3 addComment">Add a comment</h3>
    <form autocomplete="off" class="w-50 mx-auto">
 <ul>
  <li>
      <input type="text" class="form-control mb-2" id="commentator" placeholder="Your name">
</li>
<li>
      <textarea id="comment" name="comment" placeholder="Your comment..."  rows="4" cols="45"></textarea>
</li>
<li>
      <button type="button" class="btn btn-secondary commentBtn">Comment</button>
 </li>
</ul>
    </form>
  `;
    mealRecipeDetails.parentElement.classList.add('showComment');
    const commentBtn = document.querySelector('.commentBtn');
    commentBtn.addEventListener('click', () => {
        const username = document.querySelector('#commentator').value;
        const comment = document.querySelector('#comment').value;
        const itemId = meal.idMeal;
        const newData = {
            item_id: itemId,
            username,
            comment,
        };
        postComment(newData);
        document.querySelector('#commentator').value = '';
        document.querySelector('#comment').value = '';
        setTimeout(() => {
            getMealComment(meal);
        }, 1000);
    });
    getMealComment(meal);
};
const getMeal = async(e) => {
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


///////////////////////////////////////
// resevation from\

// post a reservation for the meal
const postResevation = async(data) => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.ok;
};
const getMealResvation = async(item) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l35PAuerIZ0jKQQ35zG1/reservations?item_id=${item.idMeal}`;
    let myResevation = await fetch(url).then((response) => response.json());
    const ulR = document.querySelector('#list-resevation');
    ulR.innerHTML = '';
    console.log(myResevation);
    // the resevation part is fixed here

    const h3 = document.querySelector('.reservation-count');
    h3.innerHTML = `Resevation(${resevationCounter(myResevation)})`;
    if (!myResevation.length) myResevation = [];
    myResevation.forEach((resevation) => {
        ulR.innerHTML += `
      <li class="d-flex justify-content-start align-items-center">
        <p class="me-3">${resevation.date_start}</p>
        <p class="me-3">${resevation.username}</p>
        <p>${resevation.date_end}</p>
      </li>
    `;
    });
};

const mealReseved = async(meal) => {
    [meal] = meal;
    mealReseverDetails.innerHTML = `
<h2>Virtual Cheff Reservation</h2>
<div class = "recipe-meal-img">
      <img src = "${meal.strMealThumb}" alt = "">
</div>
    <div class = "recipe-instruct">
    <h4>Resevation for</h4>
    <h4 class = "recipe-title">${meal.strMeal}</h4>
      <p class="text-center mx-5">${meal.strInstructions}</p>
    </div>
    <h3 class="m-3 reservation-count"></h3>
    <div class="d-flex justify-content-center align-items-center">
      <ul id="list-resevation" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3 addComment">Add a Resevation</h3>
    <form autocomplete="off" class="w-50 mx-auto">
 <ul>
  <li>
      <input type="text" class="form-control mb-2" id="commentator" placeholder="Your name">
</li>
<li>
<input type="date" placeholder="Start Date" class="form-control my-2" id="Startdate" >
 </li>
<li>
<input type="date" placeholder="End Date" class="form-control" id="Enddate" >
</li>

<li>
      <button type="button" class="btn btn-secondary reservationBtn  my-2">Reseve</button>
 </li>
</ul>
    </form>
  `;
    mealReseverDetails.parentElement.classList.add('showResevation');
    const commentBtn = document.querySelector('.reservationBtn');
    commentBtn.addEventListener('click', () => {
        const username = document.querySelector('#commentator').value;
        const date_start=document.querySelector('#Startdate').value;
        const date_end=document.querySelector('#Enddate').value;
        const itemId = meal.idMeal;
        const newData = {
            item_id: itemId,
            username,
            date_start,
            date_end,
        };
        postResevation(newData);
        username = document.querySelector('#commentator').value="";
        start_date=document.querySelector('#Startdate').value="";
       end_date=document.querySelector('#Enddate').value="";
        setTimeout(() => {
            getMealResvation(meal);
        }, 1000);
    });
    getMealResvation(meal);
};
const getMealRs = async(e) => {
    e.preventDefault();
    if (e.target.classList.contains('reservation-btn')) {
        const mealItem = e.target.parentElement.parentElement.parentElement;
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;
        const response = await fetch(url).then((response) => response.json()).then((data) => data);
        mealReseved(response.meals);
    }
};
// console.log(mainDivRs);

mainDiv.addEventListener('click', getMealRs);
btnCloseRS.addEventListener('click', () => {
    mealReseverDetails.parentElement.classList.remove('showResevation');
});
///////////////////////////////////////////

export default mealList;