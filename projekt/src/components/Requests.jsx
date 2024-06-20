import React from "react";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Requests</h2>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default Requests;
