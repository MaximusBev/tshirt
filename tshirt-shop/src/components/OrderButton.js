import React from "react";

const OrderButton = ({ tshirt, text, font, size, color }) => {
  const handleOrder = () => {
    if (!tshirt || !text) {
      alert("Proszę wybrać koszulkę i wpisać tekst!");
      return;
    }

    const orderDetails = {
      koszulka: tshirt.label,
      kolor: tshirt.color,
      tekst: text,
      czcionka: font,
      rozmiar: size,
      kolorTekstu: color,
    };

    console.log("Zamówienie:", orderDetails);
    alert("Zamówienie złożone! Sprawdź konsolę przeglądarki.");
  };

  return (
    <button
      onClick={handleOrder}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      Zamów
    </button>
  );
};

export default OrderButton;
