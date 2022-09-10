import './style.css';
import getMeals from './getMeals.js';
import mealList from './mealList.js';
import reservationList from './mealsReservation';

window.addEventListener('load', async () => {
  mealList( await getMeals());
});
reservationList();
