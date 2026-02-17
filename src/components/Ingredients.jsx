import styles from "./ingredients.module.css";
export default function Ingredients({ ingredient }) {
  return (
    <div className={styles.outerContainer}>
      <img
        src={
          `https://spoonacular.com/cdn/ingredients_50x50/` + ingredient.image
        }
        alt=""
      />
      <div className={styles.nameAndamount}>
        <span>{ingredient.name}</span>
        <span>{ingredient.amount}</span>
      </div>
    </div>
  );
}
