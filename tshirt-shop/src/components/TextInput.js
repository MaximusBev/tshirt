import React, { useState } from "react";

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div>
      <h2>Wprowadź tekst do wydrukowania</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Twój tekst tutaj..."
      />
    </div>
  );
};

export default TextInput;
