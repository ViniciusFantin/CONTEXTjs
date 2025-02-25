import { useContext } from "react";

import { CounterContext } from "../Context/CounterContext";
import { UNSAFE_decodeViaTurboStream } from "react-router";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add a value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
