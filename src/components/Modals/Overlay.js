
const Overlay = (props) => {
    return ( 
        <div className="fixed top-[4vh] ] left-5 bg-white rounded scroll-smooth overflow-scroll  w-11/12 shadow-sm py-2 z-50 md:top-[20vh] md:left-[25%] md:w-5/12">
            {props.children}
        </div>
     );
}
 
export default Overlay;