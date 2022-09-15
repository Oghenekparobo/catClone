import { useContext } from "react";
import Context from "../../store/Context";

const CartTable = (props) => {
  const ctx = useContext(Context);
  const totalOrder = `₦${ctx.totalOrder.toFixed(2)}`;

  const addHandler = (product) => {
    ctx.add({ ...product, quantity: 1 });
  };

  const removeHandler = (id) => {
    ctx.remove(id);
  };
  return (
    <div className="scroll-smooth">
      <table>
        {ctx.products.map((product) => (
          <tbody key={product.id}>
            <tr>
              <th>product</th>
              <th>price</th>
              <th>location</th>
              <th>add</th>
              <th>remove</th>
            </tr>

            <tr>
              <td>{product.name}</td>
              <td>₦{product.price}</td>
              <td>{product.location}</td>
              <td>
                <button
                  className="text-xl hover:text-lime-500 flex"
                  onClick={addHandler.bind(null, product)}
                >
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
                <button className="text-xl hover:text-red-500" onClick={removeHandler.bind(null, product.id)}>
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
          </tbody>
        ))}
      </table>
      <div className="sum-table-area scroll-smooth p-6 w-4/5 md:w-3/5 ">
        <div className="cart-table-area  md:p-0">
          <table>
            <thead>
              <tr>
                <th>shipping</th>
                <th className="opacity-50">FREE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>order total</th>
                <th className="opacity-50">{totalOrder}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
