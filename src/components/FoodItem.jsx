export default function FoodItem({ data }) {
  return (
    <div>
      {data.title}
      <img src={data.image}></img>
    </div>
  );
}
