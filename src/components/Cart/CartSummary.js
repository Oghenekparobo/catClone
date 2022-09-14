const CartSummary = () => {
  return (
    <div className="cart-table-area  md:p-0">
      <table>
        <tr>
          <th>cart sub total</th>
          <th className="opacity-50">₦10,000</th>
        </tr>
        <tr>
          <th>shipping</th>
          <th className="opacity-50">FREE</th>
        </tr>
        <tr>
          <th>order total</th>
          <th className="opacity-50">₦105,000</th>
        </tr>
      </table>
    </div>
  );
};

export default CartSummary;
