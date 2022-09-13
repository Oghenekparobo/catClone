import React from "react";

const Context = React.createContext({
  products: [],
  total: 0,
  add: (item) => {},
  remove: (id) => {},
});

export default Context;
