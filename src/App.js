import AddToCartForm from "./components/Cart/AddToCartForm";
import Top from "./components/Header/Top";
import Products from "./components/Products/Products";




function App() {

  return (
   <div>
     
    <Top/>
  <div className="product-section">
  <AddToCartForm/>
  <Products/>
  </div>
  
    
   </div>
  );
}

export default App;
