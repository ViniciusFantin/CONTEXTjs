import { createContext, useState } from "react";

export const CounterContext = createContext();

// Provider

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState();

  return (
    <CounterContextProvider value={{ counter, setCounter }}>
      {children}
    </CounterContextProvider>
  );
};
