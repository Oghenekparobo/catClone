import { useRef } from "react";
import AddToCart from "../Modals/AddToCart";

const AddToCartForm = (props) => {
  const quantityRef = useRef();
  const locationRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <AddToCart removeCart={props.removeCart}>
      <div className="add-to-cart__form py-2">
        <div className="add-to-cart__text  border-b-2 border-opacity-75 shadow-sm flex justify-between items-center">
          <h1 className="font-bold tracking-widest text-black uppercase py-2 px-4 text-xl">
            Add To Cart
          </h1>
          <svg
            onClick={props.removeCart}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <form className="ml-10 md:ml-20 px-4 md:px-0" onSubmit={submitHandler}>
          <div className="add-to-cart__quantity my-2">
            <input
              ref={quantityRef}
              type="number"
              className="outline-none border border-opacity-25 px-6 py-1"
              step="0"
              min="1"
              max="5"
              placeholder="1"
              required
            />
          </div>
          <div className="add-to-cart__location">
            <select
            ref={locationRef}
              name="location"
              id="location"
              className="outline-none border border-opacity-25 px-4 py-1"
            >
              <option value="vawulence headquaters">
                vawulence headquaters
              </option>
            </select>
          </div>
          <div className="add-to-cart__buttons my-2 flex flex-col justify-between pr-8 space-y-4 md:space-y-0  md:flex-row ">
            <button className="bg-lime-500 px-4 py-1 text-white shadow-sm hover:bg-lime-600">
              add to cart
            </button>
            <button className="px-6 py-1 text-sm text-lime-500 border-2 border-lime-500 font-bold hover:bg-lime-500 hover:text-white">
              View cart and checkout
            </button>
          </div>
        </form>
      </div>
    </AddToCart>
  );
};

export default AddToCartForm;
