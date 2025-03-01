import React, { useState } from "react";
import TshirtSelector from "./components/TshirtSelector";
import TextInput from "./components/TextInput";
import TextSettings from "./components/TextSettings";

function App() {
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState("20px");
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <h1>Sklep koszulek</h1>
      <TshirtSelector onSelect={setSelectedTshirt} />
      <TextInput onTextChange={setText} />
      <TextSettings onFontChange={setFont} onSizeChange={setSize} onColorChange={setColor} />

      {selectedTshirt && (
        <div style={{ marginTop: "20px" }}>
          <h3>Podgląd</h3>
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
              border: "1px solid black",
            }}
          >
            <span
              style={{
                fontFamily: font,
                fontSize: size,
                color: color,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
