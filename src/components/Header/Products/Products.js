import agbado from "../../../assets/corn.jpg";
import cashew from "../../../assets/cashew.jpg";
import kokunut from "../../../assets/general.jpg";
import soya from "../../../assets/soya.jpg";
import grass from "../../../assets/grass.png";
import Product from "./Product";
import AddToCartForm from "../../Cart/AddToCartForm";


const products = [
  {
    id: "1",
    name: "soya beans",
    kg: "2kg",
    location: "vawulence headquaters",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: soya,
    price: "7500",
  },
  {
    id: "2",
    name: "agbado",
    kg: "2kg",
    location: "vawulence headquaters",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: agbado,
    price: "7500",
  },
  {
    id: "3",
    name: "cashew",
    location: "vawulence headquaters",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: cashew,
    price: "7500",
  },
  {
    id: "4",
    name: " kokunut",
    location: "vawulence headquaters",
    kg: "2kg",
    description: "35% of organic raisins 55% of oats and 10% of butter",
    img: kokunut,
    price: "7500",
  },
];

const Products = (props) => {
  return (
    <div className="text-center py-12 px-6">
      <AddToCartForm />
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
      <div className=" relative pt-4 grid grid-cols-1 space-y-10  md:px-0 md:space-y-0 text-center md:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
