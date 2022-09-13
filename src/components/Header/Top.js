import NavMenu from "./NavMenu";
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
    </div>
  );
};

export default Top;
