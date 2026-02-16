import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Navigation from "./components/Navigation";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import Container from "./components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
    <div className="App">
      <Navigation />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
