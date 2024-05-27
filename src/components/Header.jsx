import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "./store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems=cartCtx.items.reduce(
    (totalNumberofItem, item) => totalNumberofItem + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resaurant" />
        <h2>ReactFood</h2>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
