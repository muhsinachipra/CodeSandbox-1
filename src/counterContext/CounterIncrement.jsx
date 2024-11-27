import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { Link } from "react-router-dom";

export default function CounterIncrement() {
  const { increment } = useContext(CounterContext);
  return (
    <div className="">
      <button onClick={increment}>increment</button>
      <Link to={"/"}>go to display</Link>
    </div>
  );
}
