import { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter counter={counter} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
