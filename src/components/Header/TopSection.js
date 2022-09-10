import logo from "../../assets/logo.png";
import CartBadge from "../Cart/CartBadge";
const TopSection = () => {
  return (
    <div className="flex flex-col text-center py-8 mx-10 space-x-0 md:flex-row md:space-x-96">
      <div className="search-box mx-4">
        <button className="flex-items__center  border rounded-full py-2 w-[20rem]">
          <span className="basis-10/12 text-left pl-2 text-gray-300 hover:cursor-not-allowed">
            search...
          </span>
          <div className="flex-items__center">
            <span className="border-solid border-l-2 border-gray-300 h-4 w-6"></span>
            <span className="basis-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
        </button>
      </div>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-24">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cart-badge">
          <CartBadge />
        </div>
      </div>
    </div>
  );
};
export default TopSection;
