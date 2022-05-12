import React from "react";
import RandomNumber from "./components/RandomNumber";
import NumberProvider  from "./contexts/NumberContext";

// Provider Consumer
function App() {
  return (
    <NumberProvider>
        <RandomNumber />
    </NumberProvider>
  );
}

export default App
