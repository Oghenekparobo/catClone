import { useReducer } from "react";
import Context from "./Context";

const defaultState = {
  products: [],
  total: 0,
};

const cartReducer = (state, action) => {

    if(action.type === 'add'){

        
    }

    return defaultState;
};

const Provider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addProducts = (product) => {
    dispatchCartAction({
      type: "add",
      product: product,
    });
  };

  const removeProducts = (id) => {
    dispatchCartAction({
      type: "remove",
      id: id,
    });
  };

  const values = {
    products: cartState.products,
    total: cartState.total,
    add: addProducts,
    remove: removeProducts,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default Provider;
