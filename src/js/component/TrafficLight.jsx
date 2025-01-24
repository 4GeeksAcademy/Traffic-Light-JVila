import React, { useState } from "react";

const TrafficLight = () => {
  // Estado para manejar qué luz está activa (red, yellow, green)
  const [activeLight, setActiveLight] = useState("");

  return (
    <div className="d-flex flex-column align-items-center">
      {/* Caja del semáforo */}
      <div
        style={{
          width: "50px",
          backgroundColor: "Black",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {/* Luz roja */}
        <div
          onClick={() => setActiveLight("red")} // Al hacer clic, activa la luz roja
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: activeLight === "red" ? "red" : "darkred",
            margin: "10px auto",
            cursor: "pointer",
          }}
        ></div>

        {/* Luz amarilla */}
        <div
          onClick={() => setActiveLight("yellow")} // Al hacer clic, activa la luz amarilla
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: activeLight === "yellow" ? "yellow" : "#8a8a00",
            margin: "10px auto",
            cursor: "pointer",
          }}
        ></div>

        {/* Luz verde */}
        <div
          onClick={() => setActiveLight("green")} // Al hacer clic, activa la luz verde
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: activeLight === "green" ? "green" : "darkgreen",
            margin: "10px auto",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;