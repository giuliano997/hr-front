import React from "react";
import { useNavigate } from "react-router-dom";

const Leave = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Leave</h2>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default Leave;
