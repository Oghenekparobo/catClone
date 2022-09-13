const CartTable = () => {
  return (
    <table>
      <tr>
        <th>product</th>
        <th>price</th>
        <th>location</th>
        <th>add</th>
        <th>remove</th>
      </tr>
      <tr>
        <td>ofada rice</td>
        <td>NGN7,500</td>
        <td>vawulence headquaters</td>
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
  );
};

export default CartTable;
