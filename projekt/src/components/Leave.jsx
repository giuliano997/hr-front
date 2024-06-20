import React from "react";
import { useNavigate } from "react-router-dom";

const Leave = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Urlaubstage</h2>
      <button onClick={() => navigate("/home")}>Zurück zur Startseite</button>
    </div>
  );
};

export default Leave;
