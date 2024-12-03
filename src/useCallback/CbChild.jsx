import { useEffect, useState } from "react";

export default function CbChild({ cbIncrement }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(cbIncrement);
    console.log("cbIncrement changed");
  }, [cbIncrement]);

  return list.map((li) => <div key={li}>{li}</div>);
}
