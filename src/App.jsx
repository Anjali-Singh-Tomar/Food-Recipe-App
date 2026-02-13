import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Navigation from "./components/Navigation";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Navigation />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Foodlist foodData={foodData} />
    </div>
  );
}

export default App;
