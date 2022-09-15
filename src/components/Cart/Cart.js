

import ViewCart from "../Modals/ViewCart";

import CartTable from "./CartTable";

const Cart = (props) => {
  

  return (
    <ViewCart removeCart={props.removeCart}>
      <div className="text-center scroll-smooth overflow-auto">
        <div className="flex justify-between border-b-2 border-opacity-25 p-4">
          <h1 className="text-xl font-bold">View Cart</h1>
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
        <div className="p-6">
          <CartTable />
        </div>
      </div>
    </ViewCart>
  );
};

export default Cart;
