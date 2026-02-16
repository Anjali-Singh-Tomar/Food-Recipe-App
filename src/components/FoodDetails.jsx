import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dish, setDish] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "58461c0cef344097bf02cc8059ebaac5";

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setDish(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div className={styles.foodDetails}>
      <h1>{dish.title}</h1>
      <img src={dish.image} alt="" className={styles.image} />

      <div className={styles.details}>
        <span>⏰{dish.readyInMinutes} minutes</span>
        <span>👨‍👩‍👧‍👦 {dish.servings} servings</span>
        <span>{dish.vegetarian ? "🟢" : "🔴"}</span>
        <span>{dish.vegan ? "Vegan" : ""}</span>
      </div>

      <div className={styles.price}>
        <span>${dish.pricePerServing / 100} - per serving</span>
      </div>
      {/* <div>
          <h3>Summary:</h3>
          <p>{dish.summary}</p>
        </div> -->need to include innerHTM */}
      <div className={styles.ingredientContainer}>
        <h3>Ingredeints:</h3>
        {isLoading ? (
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXgwb2txanJreXl1b2dpcWU5aGhnYWJqcHVxOXE1OXdqMWh5YWhvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JJLEyrGhIK82G3SDye/giphy.gif"
            alt=""
            className={styles.loading}
          />
        ) : (
          dish.extendedIngredients.map((ingredeint) => (
            <Ingredients ingredient={ingredeint} key={ingredeint.id} />
          ))
        )}
      </div>
      <div className={styles.instContainer}>
        <h3>Instructions: </h3>
        {isLoading ? (
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXgwb2txanJreXl1b2dpcWU5aGhnYWJqcHVxOXE1OXdqMWh5YWhvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JJLEyrGhIK82G3SDye/giphy.gif"
            alt=""
            className={styles.loading}
          />
        ) : (
          dish.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
