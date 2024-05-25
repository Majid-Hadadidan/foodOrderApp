import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadingMeals, setLoadingMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }
      const meals = await response.json();
      setLoadingMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadingMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
