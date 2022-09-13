
import ReactDom from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const AddToCart = (props) => {
  const portalElement = document.getElementById("addToCart");
  return (
    <>
      {ReactDom.createPortal(<Backdrop removeCart={props.removeCart} />, portalElement)}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default AddToCart;
