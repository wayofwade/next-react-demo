/**
 * useRef的使用demo
 */
import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ForwardRefExoticComponent
} from "react";

const Child: ForwardRefExoticComponent<any> = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    say: sayHello,
  }));
  const sayHello = () => {
    alert("hello,我是子组件");
  };
  return <h3>子组件</h3>;
});


const RefDemo = () => {
  const domRef = useRef<any>(1);
  const childRef = useRef<any>(null);
  useEffect(() => {
    console.log("ref:dom-init", domRef, domRef.current);
    console.log("ref:child-init", childRef, childRef.current);
  });
  const showChild = () => {
    console.log("ref:child", childRef, childRef.current);
    childRef?.current?.say();
  };
  return (
    <div style={{ margin: "100px", border: "2px dashed", padding: "20px" }}>
      <h2>这是外层组件</h2>
      <div
        onClick={() => {
          console.log("ref:deom", domRef, domRef.current);
          domRef.current?.focus();
          domRef.current.value = 'hh';
        }}
      >
       <label>这是一个dom节点</label><input ref={domRef} />
      </div>
      <br />
      <button onClick={showChild} style={{ marginTop: "20px" }}>
        这是子组件
      </button>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <Child ref={childRef} />
      </div>
    </div>
  );
};
export default RefDemo;
