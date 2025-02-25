import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Context não encontrado");
  }

  return context;
};
