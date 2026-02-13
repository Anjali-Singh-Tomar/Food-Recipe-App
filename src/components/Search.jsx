import styles from "./search.module.css";
import { useEffect, useState } from "react";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "58461c0cef344097bf02cc8059ebaac5";

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); //data fetched in json
      const data = await res.json(); //use of async await because fetching data takes time , waiting till we get response
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchRecipe();
  }, [query]); //state is accepted as a dependency array

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.inputField}
      />
    </div>
  );
}
