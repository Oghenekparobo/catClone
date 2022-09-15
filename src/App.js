import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Features from "./components/Features/Features";
import Top from "./components/Header/Top";
import Products from "./components/Products/Products";
import Provider from "./store/Provider";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const showCartHandler = () => [setViewCart(true)];
  const removeCartHandler = () => [setViewCart(false)];
  return (
    <Provider>
      {viewCart && <Cart removeCart={removeCartHandler} />}
      {/* menu and sliders */}
      <Top onCart={showCartHandler} />
      <div className="product-section">
        <Products />
      </div>
      <div className="features-sections">
      <Features/>
      </div>
   
    </Provider>
  );
}

export default App;
