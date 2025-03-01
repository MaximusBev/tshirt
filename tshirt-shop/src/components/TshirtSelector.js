import React, { useState } from "react";

const TshirtSelector = ({ onSelect }) => {
  const tshirts = [
    { id: 1, color: "white", label: "Biała koszulka" },
    { id: 2, color: "black", label: "Czarna koszulka" },
  ];

  const [selectedTshirt, setSelectedTshirt] = useState(tshirts[0]);

  const handleSelect = (tshirt) => {
    setSelectedTshirt(tshirt);
    onSelect(tshirt);
  };

  return (
    <div>
      <h2>Wybierz koszulkę</h2>
      {tshirts.map((tshirt) => (
        <button
          key={tshirt.id}
          onClick={() => handleSelect(tshirt)}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: tshirt.color,
            color: tshirt.color === "black" ? "white" : "black",
          }}
        >
          {tshirt.label}
        </button>
      ))}
    </div>
  );
};

export default TshirtSelector;
