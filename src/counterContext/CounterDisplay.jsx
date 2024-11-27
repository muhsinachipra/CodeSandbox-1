import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { Link } from "react-router-dom";

export default function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return (
    <div className="">
      <div className="">Count : {count}</div>
      <Link to={"/increment"}>go to increment page</Link>
    </div>
  );
}
