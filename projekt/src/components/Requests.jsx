import React from "react";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Anträge</h2>
      <button onClick={() => navigate("/home")}>Zurück zur Startseite</button>
    </div>
  );
};

export default Requests;
