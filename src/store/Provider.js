import { useReducer } from "react";
import Context from "./Context";

const defaultProductState = { products: [], totalOrder: 0 };

const productReducer = (state, action) => {
  // adding product to cart
  if (action.type === "add") {
    // update total orders
    const orders =
      state.totalOrder + action.product.price * action.product.quantity;

    // find the index of an existing product
    const existingProductPosition = state.products.findIndex(
      (product) => product.id === action.product.id
    );

    // avoiding duplication of product
    const existingProduct = state.products[existingProductPosition];

    let updatedProducts;

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + action.product.quantity,
      };

      updatedProducts = [...state.products];
      updatedProducts[existingProductPosition] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.products);
    }

    return { products: updatedProducts, totalOrder: orders };
  }

  // removing product from cart
  if (action.type === "remove") {
    return { products: [], totalOrder: 0 };
  }

  return defaultProductState;
};

const Provider = (props) => {
  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    defaultProductState
  );

  const addProduct = (product) => {
    dispatchProductAction({
      type: "add",
      product: product,
    });
  };

  const removeProduct = (id) => {
    dispatchProductAction({
      type: "remove",
      id: "id",
    });
  };

  const defaultContext = {
    products: productState.products,
    totalOrder: productState.totalOrder,
    add: addProduct,
    remove: removeProduct,
  };
  return (
    <Context.Provider value={defaultContext}>{props.children}</Context.Provider>
  );
};

export default Provider;
