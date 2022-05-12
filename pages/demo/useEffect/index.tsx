import React, {
    useState,
    useEffect,
    useLayoutEffect
  } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    
    useEffect(() => {
      if (count === 0) {
        const randomNum = 10 + Math.random()*200
        setCount(10 + Math.random()*200);
      }
    }, [count]);
    useLayoutEffect(() => {
        if (count1 === 0) {
          const randomNum = 10 + Math.random()*200
          setCount1(10 + Math.random()*200);
        }
      }, [count1]);
    
  
    return (
        <div>
             {/* 会闪动 */}
            <div onClick={() => setCount(0)}>{count}</div>
            {/* 不动 */}
            <div onClick={() => setCount1(0)}>{count1}</div>
        </div>
    );
  }
  export default App
  