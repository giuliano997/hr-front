import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./global.css";
import { useSessionStorage } from "usehooks-ts";

const LogIn = () => {
  const [value, setValue, removeValue] = useSessionStorage(
    "userId",
    undefined,
    { deserializer: (value) => parseInt(value, 10) }
  );
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleLogIn = () => {
    setValue(userId);
    navigate("/home");
  };

  return (
    <div className="container">
      <h2 className="heading">Log In</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button onClick={handleLogIn} className="button">
        Log In
      </button>
    </div>
  );
};

export default LogIn;
