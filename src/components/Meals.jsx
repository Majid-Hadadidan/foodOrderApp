import { useState } from "react";
import { useEffect } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
