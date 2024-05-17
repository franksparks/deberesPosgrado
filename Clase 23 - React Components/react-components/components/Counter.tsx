"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const sumar = (n: number) => () => setCount((prev) => prev + n);
  const reset = () => setCount(0);

  const incrementar = () => {
    //Experimento 1
    setCount(count + 1);
    setCount(count + 1);
  };

  const incrementar2 = () => {
    //Experimento 2
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h2>Counter component</h2>
      <div>
        <div>{count}</div>
        <button onClick={sumar(1)}>Uno más</button>
        <button onClick={sumar(-1)}>Uno menos</button>
        <button onClick={reset}>Reset</button>
        <div>
          <button onClick={incrementar}>Test</button>
        </div>
        <div>
          <button onClick={incrementar2}>Test</button>
        </div>
      </div>
    </>
  );
}
