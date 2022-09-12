import agbado from "../../assets/corn.jpg";
import cashew from "../../assets/cashew.jpg";
import kokunut from "../../assets/general.jpg";
import soya from "../../assets/soya.jpg";
import grass from "../../assets/grass.png";
import ProductForm from "./ProductForm";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "soya beans",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: soya,
    price: "7500",
  },
  {
    id: "2",
    name: "agbado",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: agbado,
    price: "7500",
  },
  {
    id: "3",
    name: "cashew",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: cashew,
    price: "7500",
  },
  {
    id: "4",
    name: " kokunut",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: kokunut,
    price: "7500",
  },
];

const Products = () => {
  const [bgOverlay, setBgOverlay] = useState(false);

  return (
    <div className="text-center py-12">
      <div className=" py-4">
        <h1 className="font-bold text-2xl">FEATURED PRODUCTS</h1>
        <div className="flex justify-center py-4">
          <img src={grass} alt="grass" width="35" />
        </div>
        <div className="space-y-4 pb-4 mx-4 flex flex-col md:inline  md:space-x-6 md:space-y-0">
          <button className="bg-lime-500 py-2 px-6 text-white opacity-75">
            All Products
          </button>
          <button className="bg-gray-100 hover:bg-lime-500 hover:text-white py-2 px-6 opacity-75">
            All Fruits
          </button>
          <button className="bg-gray-100 hover:bg-lime-500 hover:text-white py-2 px-6 opacity-75">
            Vegetables
          </button>
          <button className="bg-gray-100 hover:bg-lime-500 hover:text-white py-2 px-6 opacity-75">
            Grains
          </button>
          <button className="bg-gray-100 hover:bg-lime-500 hover:text-white py-2 px-6 opacity-75">
            Others
          </button>
        </div>
      </div>
      <div className=" relative mx-10 grid grid-cols-1 space-y-4 pt-4 md:space-y-0 text-center md:grid-cols-4">
        {products.map((product) => (
          <div
            className="prod-card border-2 border-opacity-25 p-4 text-center w-5/6 cursor-pointer relative"
            onMouseOver={() => setBgOverlay(true)}
            onMouseOut={() => {
              setBgOverlay(false);
            }}
          >
            {/* show on mouse hover */}
            {bgOverlay && (
              <div class="absolute inset-0 bg-gradient-to-r  from-gray-200 to-gray-200 opacity-75 flex justify-center items-start">
                <div className="prod-icons absolute pt-8 space-x-2  flex">
                  {/* cart to bring out form */}
                  <ProductForm />
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
            )}

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
              {bgOverlay && (
                <div class="absolute inset-0 bg-lime-500 p-4 text-left">
                  <h3 className="description border-b-2 border-b-white font-bold text-white pb-2">
                    It contains
                  </h3>
                  <p className="text-sm text-white py-2">
                    {product.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
