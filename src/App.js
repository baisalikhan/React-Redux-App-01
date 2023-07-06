import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.deccrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div className="App">
      <h1>This is my first redux application</h1>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
