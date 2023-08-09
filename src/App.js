import { useEffect, useState } from "react";

function Hello() {
  /* 일반적으로 function을 따로 만들지 않고 useEffect 안에 모든 것을 작성한다.
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("hi :)");
    return byFn;
  }
  useEffect(hiFn, []);
  */
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
