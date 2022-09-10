import './style.css';
import getMeals from './getMeals.js';
import mealList from './mealList.js';

window.addEventListener('load', async () => {
  mealList(await getMeals());
});
