
const Overlay = (props) => {
    return ( 
        <div className="fixed top-[20vh] left-5 bg-white rounded  w-11/12 shadow-sm py-2 z-50 md:w-5/12">
            {props.children}
        </div>
     );
}
 
export default Overlay;