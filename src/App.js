import { useState } from "react";
import AddToCartForm from "./components/Cart/AddToCartForm";
import Top from "./components/Header/Top";
import Products from "./components/Products/Products";

function App() {
  const [addCart, setAddCart] = useState(false);
  const setAddCartHandler = () => [setAddCart(true)];
  const removeAddCartHandler = () => [setAddCart(false)];
  return (
    <div>
      <Top />
      <div className="product-section">
        {addCart && <AddToCartForm onRemoveCart={removeAddCartHandler} />}
        <Products onAddCart={setAddCartHandler}  />
      </div>
    </div>
  );
}

export default App;
