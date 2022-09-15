
const Overlay = (props) => {
    return ( 
        <div className="fixed top-[10%] left-5 bg-white rounded  w-10/12 shadow-sm p-4 mx-4 z-50 md:left-[25%] md:w-5/12">
            {props.children}
        </div>
     );
}
 
export default Overlay;