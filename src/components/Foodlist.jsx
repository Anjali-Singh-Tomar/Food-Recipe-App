import styles from "./foodList.module.css";
import FoodItem from "./FoodItem";

export default function Foodlist({ foodData }) {
  return (
    <div className={styles.container}>
      {foodData.map((data) => (
        <FoodItem key={data.id} data={data} />
      ))}
    </div>
  );
}
