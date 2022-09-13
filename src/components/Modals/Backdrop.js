
const Backdrop = (props) => {
    return ( 
        <div className="fixed inset-0 bg-black opacity-75 cursor-pointer z-30" onClick={props.removeCart}></div>
     );
}
 
export default Backdrop;