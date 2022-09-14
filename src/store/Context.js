import React from "react";

const Context = React.createContext({
  products: [],
  totalOrder: 0,
  add: (product) => {},
  remove: (id) => {},
});

export default Context;
