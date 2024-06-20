import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/time")}>Time</button>
      <button onClick={() => navigate("/leave")}>Leave</button>
      <button onClick={() => navigate("/requests")}>Requests</button>
    </div>
  );
};

export default Home;
