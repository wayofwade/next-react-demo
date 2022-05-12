import React, { useContext } from "react";

import { NumberContext } from "../contexts/NumberContext";

export default function() {
  const { number, updateNumber } = useContext(NumberContext);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={updateNumber}>Update Number</button>
    </div>
  );
}
