import {useState } from "react";
import Cart from "./components/Cart/Cart";
import Top from "./components/Header/Top";
// import Products from "./components/Products/Products";
import Provider from "./store/Provider";

function App() {
  const [viewCart, setViewCart] = useState(false);
  const showCartHandler = () => [setViewCart(true)];
  const removeCartHandler = () => [setViewCart(false)];


  return (
    <Provider>
      {viewCart && <Cart removeCart={removeCartHandler} />}
      <Top onCart={showCartHandler} />
     
    
    </Provider>
  );
}

export default App;
