import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const { children } = props

  const [number, setNumber] = useState(5)

  const updateNumber = () => {
    setNumber(Math.random());
  }
  return (
    <NumberContext.Provider
      value={{
        number: number,
        updateNumber: updateNumber
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

export default NumberProvider
