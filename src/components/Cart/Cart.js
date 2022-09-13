import ViewCart from "../Modals/ViewCart";

const Cart = () => {
  return (
    <ViewCart>
        <div className="text-center">
            <div className="flex justify-between border-b-2 border-opacity-25 p-4">
            <h1 className="text-xl font-bold">View Cart</h1>
            <svg
           
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
       <div className="cart-table-area p-4 scroll-smooth overflow-auto">
       <table>
        <tr>
          <th>product</th>
          <th>price</th>
          <th>add</th>
          <th>remove</th>
        </tr>
        <tr>
          <td>ofada rice</td>
          <td>NGN7,500</td>
          <td>
            <button className="text-xl hover:text-lime-500 flex">
                <span className="border">x1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </td>
          <td>
            <button className="text-xl hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
          </td>

        </tr>
      </table>
       </div>

       <div className="sum-table-area w-3/5 p-4">
           <table>
           <tr>
          <th>cart sub total</th>
          <th className="opacity-50">NGN5,000</th>
        </tr>
        <tr>
          <th>shipping</th>
          <th className="opacity-50">FREE</th>
        </tr>
        <tr>
          <th>order total</th>
          <th className="opacity-50">NGN5,000</th>
        </tr>
           </table>
           
       </div>
      
        </div>
     
    </ViewCart>
  );
};

export default Cart;
