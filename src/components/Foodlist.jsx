import FoodItem from "./FoodItem";
import styles from "./foodList.module.css";
export default function Foodlist({ setFoodId, foodData }) {
  return (
    <div className={styles.foodListContainer}>
      {foodData.map((data) => (
        <FoodItem key={data.id} data={data} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
