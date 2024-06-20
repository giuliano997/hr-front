import React from "react";
import { useNavigate } from "react-router-dom";

const Time = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Time</h2>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default Time;
