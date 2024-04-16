import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>改變主題</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

const slowFunction = (num) => {
  console.log("呼叫 slowFunction");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default App;
