import { useContext } from "react";
import Button from "./UI/Button.jsx";
import { currencyFormatter } from "./util/formatting.js";
import CartContext from "./store/CartContext.jsx";
export default function MealItem({ meal }) {

  const ctxCart=useContext(CartContext);

  function handleAddMealToCart(){
    ctxCart.addItem(meal)
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <h3>{meal.name}</h3>
        <div>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
