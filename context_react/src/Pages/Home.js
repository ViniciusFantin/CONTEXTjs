// import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // context mais complexo
  const { color, dispatch } = useTitleColorContext();
  console.log(color);

  // alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <h1>Clique para mudar a cor do título</h1>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
        <button onClick={() => setTitleColor("PINK")}>Rosa</button>
      </div>
    </div>
  );
};

export default Home;
