import React, { use, useState } from "react";
import { useCounter } from "./components/newAppComponents/counterStore.jsx";

export default function NewApp() {
  //const [count, setCount] = useState(0);

  const myCounter = useCounter((state) => state.count);
  const incrementer = useCounter((state) => state.increment);
  const decrementer = useCounter((state) => state.decrement);
  const reset = useCounter((state) => state.reset);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-7xl">{myCounter}</div>
      <div>
        <button
          onClick={incrementer}
          className="bg-blue-500 p-2 rounded-lg mt-4"
        >
          Increment
        </button>
      </div>
      <div>
        <button
          onClick={decrementer}
          className="bg-blue-500 p-2 rounded-lg mt-4"
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          onClick={reset}
          className="bg-blue-500 p-2 rounded-lg mt-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
