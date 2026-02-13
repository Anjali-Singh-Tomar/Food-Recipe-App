import FoodItem from "./FoodItem";

export default function Foodlist({ foodData }) {
  return (
    <>
      {foodData.map((data) => (
        <FoodItem key={data.id} data={data} />
      ))}
    </>
  );
}
