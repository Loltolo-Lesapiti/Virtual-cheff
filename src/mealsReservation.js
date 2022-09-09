// import count from './reservationCount.js';
const mainContainer = document.querySelector('.meals-wrapper');
const mealList = async (data) => {
    for (let i = 0; i < data.length ; i += 1) {
        // Meal comments section
const reservationModal = async (meal) => {
    [meal] = meal;
    mainContainer.innerHTML = `
    <div class="modal fade" id=${meal.idMeal} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">${meal.strCategory}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <img id ="image" src="${meal.strMealThumb}" class="container" alt="...">
      </div>
      <div class="p-2 bd-highlight">
        <h3 id="title">${meal.strMeal}</h3>
        <p id="desc">${meal.strInstructions}</p>
      </div>
      <div class="p-2 bd-highlight">
        <h5>Reservation (4)</h5>
        <ul class="list-group">
        </ul>
      </div>
      <div class="p-2 bd-highlight">
        <h5>Add a Reservation</h5>
        <div class="col-lg-6">
          <form>
            <div class="mb-3">
              <input type="text" placeholder="Your Name" class="form-control" id="name" >
            </div>
            <div class="mb-3">
              <input type="date" placeholder="Start Date" class="form-control" id="Startdate" >
            </div>
            <div class="mb-3">
              <input type="date" placeholder="End Date" class="form-control" id="Enddate" >
            </div>
            <button type="submit" id="reserveBtn" class="btn btn-primary">Reserve</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    </div>
    </div> 
  </div>
    `;
    const reserveBtn = document.querySelector('.reservation-btn');
    reserveBtn.addEventListener('click', () => {
        $(meal.idMeal).modal("show");
      });
}
}
}