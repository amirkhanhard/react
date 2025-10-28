import React, { useState } from "react";

// ✅ React.memo prevents re-render if props haven't changed
const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <div>Child Value: {value}</div>;
});

const Testing2Memo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <h1>React.memo Example</h1>
      <Child value={count} />
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
    </div>
  );
};

export default Testing2Memo;
