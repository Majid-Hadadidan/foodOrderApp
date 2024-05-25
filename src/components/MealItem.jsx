export default function MealItem({meal}) {
  console.log(meal)
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <h3>{meal.name}</h3>
        <div>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">{meal.price}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
