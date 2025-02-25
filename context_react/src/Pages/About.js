//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador está em: {counter}</p>
    </div>
  );
};

export default About;
