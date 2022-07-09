import React, { useState, useEffect } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState();

  setTimeout(() => {
    if (second < 60) {
      setSecond(second + 1);
    }
  }, 1000);

  useEffect(() => {
    if (second === 60) {
      setTimeout(() => {
        setMin(min + 1);
      }, 1000);
      setSecond(0);
    }
  }, [second]);

  return (
    <>
      <h1>Timer</h1>

      <span style={{ fontSize: "48px" }}>{min}:</span>
      <span style={{ fontSize: "48px" }}>{second}</span>

      <button style={{ margin: "20px", display: "block" }}>Start</button>
      <button>Stop</button>
    </>
  );
}
export default App;
