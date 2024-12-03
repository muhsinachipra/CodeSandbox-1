import { useCallback, useState } from "react";
import CbChild from "./CbChild";

export default function CbFun() {
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);
  const cbIncrement = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setDark((prev) => !prev)}>toggle theme</button>
      <CbChild cbIncrement={cbIncrement} />
    </div>
  );
}
