import { useState } from "react";
import AddToCartForm from "./components/Cart/AddToCartForm";
import Cart from "./components/Cart/Cart";
import Top from "./components/Header/Top";
import Products from "./components/Products/Products";

function App() {
  const [addCart, setAddCart] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const setAddCartHandler = () => [setAddCart(true)];
  const removeAddCartHandler = () => [setAddCart(false)];
  const showCartHandler = () => [setViewCart(true)];
  const removeCartHandler = () => [setViewCart(false)];
  return (
    <div>
      {viewCart && <Cart removeCart={removeCartHandler} />}
      <Top onCart={showCartHandler} />
      <div className="product-section">
        {addCart && <AddToCartForm removeCart={removeAddCartHandler} />}
        <Products onAddCart={setAddCartHandler} />
      </div>
    </div>
  );
}

export default App;
