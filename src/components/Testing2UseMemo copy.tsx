import React, { useMemo, useState } from "react";

const Child = ({ value }: { value: number }) => {
  console.log("Child rendered");
  return <div>Child Value: {value}</div>;
};

const Testing2UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ❌ Without useMemo — <Child /> will re-render on every theme toggle
  const memoizedChild = useMemo(() => <Child value={count} />, [count]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <h1>useMemo with Components</h1>
      {memoizedChild}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
    </div>
  );
};

export default Testing2UseMemo;
