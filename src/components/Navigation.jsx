import styles from "./navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.nav}>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThuYW96cWNqNHo0ZndwenB3c2hzaHR0cXRpOXc4bzhxOWlvNHl0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JnclZirSsvtY1Q20ox/giphy.gif"
        alt="LOGO"
        className={styles.logo}
      />
      <h3>Find All Food Recipes here</h3>
    </div>
  );
}
