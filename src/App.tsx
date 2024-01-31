import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount((count += 1))}>Increase</button>
      <button onClick={() => setCount((count -= 1))}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to zero</button>
    </div>
  );
}

export default App;
