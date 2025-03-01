import React, { useState } from "react";
import TshirtSelector from "./components/TshirtSelector";
import TextInput from "./components/TextInput";

function App() {
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Sklep koszulek</h1>
      <TshirtSelector onSelect={setSelectedTshirt} />
      <TextInput onTextChange={setText} />
      {selectedTshirt && (
        <div style={{ marginTop: "20px" }}>
          <h3>Podgląd wydruku</h3>
          <div
            style={{
              width: "200px",
              height: "250px",
              backgroundColor: selectedTshirt.color,
              position: "relative",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: selectedTshirt.color === "black" ? "white" : "black",
              border: "1px solid black",
            }}
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
