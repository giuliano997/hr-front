import React from "react";
import { useNavigate } from "react-router-dom";

const Time = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Arbeitszeit</h2>
      <button onClick={() => navigate("/home")}>Zurück zur Startseite</button>
    </div>
  );
};

export default Time;
