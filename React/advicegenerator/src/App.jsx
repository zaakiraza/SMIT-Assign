import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const data = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const responseJson = await response.json();
    setAdvice(responseJson.slip.advice);
  };
  data();
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        {advice}
      </h1>
    </>
  );
}

export default App;
