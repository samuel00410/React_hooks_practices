import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>我的名字是 : {name}</div>
      <button onClick={focusInput}>focus</button>
    </>
  );
}

export default App;
