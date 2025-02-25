//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
const Products = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Produtos</h1>
      <p>Número de produtos: {counter}</p>
    </div>
  );
};
export default Products;
