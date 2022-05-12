import React, { useState, memo, useCallback, useMemo } from "react";

const ChildComp = memo((props: any) => {
    const { info, onClick } = props
  console.log("render child-comp ...");
  return (
    <>
      <div>
        Child Comp ... {info.name}、{info.age}
      </div>
      <button onClick={() => onClick("hello")}>改变 name 值</button>
    </>
  );
});

function ParentComp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  const [name, setName] = useState("hi~");
  const [age, setAge] = useState(20);
  const changeName = useCallback(newName => setName(newName), []);
  // useMemo() demo ...
  const info = useMemo(() => ({ name, age }), [name, age]);

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp info={info} onClick={changeName} />
    </div>
  );
}

export default ParentComp;
