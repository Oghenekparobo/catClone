import ProductForm from "./ProductForm";

const Product = ({product}) => {
  return (
    <div className="prod-card border-2 border-opacity-25 p-10 text-center  w-11/12 md:w-5/6 cursor-pointer relative">
      {/* show on mouse hover */}
        <div className="absolute inset-0 bg-gradient-to-b  from-slate-100 to-slate-100 bg-blend-darken  opacity-70 flex justify-center items-start">
          <div className="prod-icons absolute pt-14 space-x-2  flex">
            {/* cart to bring out form */}
            <ProductForm/>
            {/* end of cart bring out form */}
            <div className="prod-icons__rounded hover:bg-lime-500 hover:text-white hover:font-bold">
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div className="prod-icons__rounded hover:bg-lime-500 hover:text-white hover:font-bold">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
        </div>


      <div className="prod-card__img ">
        <img
          src={product.img}
          alt="product"
          className="object-cover object-fit h-[12rem]"
        />
      </div>
      <div className="prod-card__content bg-gray-100 my-2 py-4 relative">
        <p className="font-bold text-gray-600">{product.name}</p>
        <p className="font-bold text-black text-sm py-1">{product.kg}</p>
        <p className="ml-10 font-bold">
          ₦{product.price}{" "}
          <span className="line-through text-sm pl-3 opacity-50">
            ₦{product.price}{" "}
          </span>
        </p>

        {/* show on mouse hover */}
   
          <div class="absolute inset-0 bg-lime-500 p-4 text-left">
            <h3 className="description border-b-2 border-b-white font-bold text-white pb-2">
              It contains
            </h3>
            <p className="text-sm text-white py-2">{product.description}</p>
          </div>
     
      </div>
    </div>
  );
};

export default Product;
