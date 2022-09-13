const CartSummary = () => {
  return (
    <div className="cart-table-area scroll-smooth overflow-auto md:p-0">
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
  );
};

export default CartSummary;
