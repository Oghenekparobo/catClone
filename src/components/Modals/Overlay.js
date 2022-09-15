
const Overlay = (props) => {
    return ( 
        <div className="fixed left-5 bg-white rounded  w-11/12 shadow-sm py-2 m-2 z-50 md:left-[25%] md:w-5/12">
            {props.children}
        </div>
     );
}
 
export default Overlay;