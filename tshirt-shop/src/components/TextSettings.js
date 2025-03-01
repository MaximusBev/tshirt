import React from "react";

const TextSettings = ({ onFontChange, onSizeChange, onColorChange }) => {
  return (
    <div>
      <h2>Ustawienia tekstu</h2>
      <label>Czcionka:</label>
      <select onChange={(e) => onFontChange(e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>

      <label>Rozmiar:</label>
      <input
        type="number"
        min="10"
        max="50"
        defaultValue="20"
        onChange={(e) => onSizeChange(e.target.value + "px")}
      />

      <label>Kolor tekstu:</label>
      <input type="color" onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
};

export default TextSettings;
