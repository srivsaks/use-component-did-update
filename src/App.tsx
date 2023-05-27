import { useEffect, useState } from "react";
import "./styles.css";
import useComponentDidUpdate from "./useComponentDidUpdate";

export default function App() {
  // disbale react strict mode
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("myval", val);
  }, [val]);

  useComponentDidUpdate(() => {
    console.log("mynewval", val);
  }, [val]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setVal((prev) => prev + 1);
        }}
      >
        Increment Val
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
