import AddToCart from "../Modals/AddToCart";

const AddToCartForm = () => {
    return ( 
        <AddToCart>
            <div className="add-to-cart__form py-2">
                <h1 className="font-bold tracking-widest text-black uppercase py-2 px-4 text-[1rem] border-b-2 border-opacity-75 shadow-sm">Add To Cart</h1>
                <form action="" className="ml-20">
                <div className="add-to-cart__quantity my-2">
                    <input type="number" className="outline-none border border-opacity-25 px-6 py-1" step="0" min="1" max="5" placeholder="1" required/>
                </div>
                <div className="add-to-cart__location">
                    <select name="location" id="location" className="outline-none border border-opacity-25 px-6 py-1">
                        <option value="vawulence headquaters">vawulence headquaters</option>
                    </select>
                </div>
                <div className="add-to-cart__buttons my-2 flex justify-between pr-8">
                <button className="bg-lime-500 px-4 py-1 text-white shadow-sm hover:bg-lime-600">add to cart</button>
                    <button className="px-6 py-1 text-sm text-lime-500 border-2 border-lime-500 font-bold hover:bg-lime-500 hover:text-white">View cart and checkout</button>
                </div>
                </form>

            </div>

        </AddToCart>
     );
}
 
export default AddToCartForm;