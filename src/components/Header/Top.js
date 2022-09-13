
import NavMenu from "./NavMenu";
import Product from "./Products/Product";
import Slider from "./Slider";
import TopNav from "./TopNav";
import TopSection from "./TopSection";

const Top = (props) => {
  return (
    
    <div>
      <TopNav />
      <TopSection onCart={props.onCart} />
      <NavMenu/>
      <Slider/>
     <Product/>
    </div>
  );
};

export default Top;
