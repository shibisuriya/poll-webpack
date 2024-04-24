import React, { useEffect, useRef, useState } from "react";

class MetaData {
  constructor() {
    this.name = "shibi";
  }
}

function Test() {
  const count = useRef(1);
  useEffect(() => {
    count.current = 1;
  }, []);
  const changeValues = () => {
    count.current++;
  };

  const [b, setB] = useState(false);

  const changeStateVariable = () => {
    setB((prev) => !prev);
  };

  return (
    <div>
      <div>count: {count.current}</div>
      <div>Boolean: {b}</div>

      <button onClick={changeValues}>Change</button>
      <button onClick={changeStateVariable}>Change</button>
    </div>
  );
}

export default Test;
