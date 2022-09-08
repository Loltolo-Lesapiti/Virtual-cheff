import './style.css';
import getMeals from './getMeals';
import mealList from './mealList';

window.addEventListener('load', async () => {
    mealList(await getMeals());
});