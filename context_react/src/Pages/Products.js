//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Número de produtos: {counter}</p>
    </div>
  );
};
export default Products;
