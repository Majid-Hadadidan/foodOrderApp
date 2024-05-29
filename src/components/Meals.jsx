import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  //fetch with useHttp
  const {
    data: loadingMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/mealssss", requestConfig, []);

  if (isLoading) {
    return <p className="center"> Fetch isLoading...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadingMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
