
import ReactDom from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const ViewCart = (props) => {
  const portalElement = document.getElementById("viewCart");
  return (
    <>
      {ReactDom.createPortal(<Backdrop removeCart={props.removeCart}/>, portalElement)}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default ViewCart;
