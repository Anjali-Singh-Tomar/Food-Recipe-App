import styles from "./foodItem.module.css";
export default function FoodItem({ data }) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.dishImage} src={data.image}></img>
      <h3>{data.title}</h3>
      <button className={styles.veiwMore}>View Recipe</button>
    </div>
  );
}
