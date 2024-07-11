import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { createLeaveRequest } from "../api";
import "./global.css";
import { useSessionStorage } from "usehooks-ts";

const Leave = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userId] = useSessionStorage("userId", undefined, {
    deserializer: (value) => parseInt(value, 10),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const leaveRequestData = { userId, startDate, endDate };
    try {
      await createLeaveRequest(leaveRequestData);
      alert("Der Urlaubsantrag wurde erfolgreich eingereicht");
    } catch (error) {
      alert("Der Urlaubsantrag konnte nicht eingereicht werden");
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Urlaubstage</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Anfangsdatum:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Enddatum:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Anfrage senden
        </button>
      </form>
      <ButtonLink to="/home" className="button-link">
        Zurück zur Startseite
      </ButtonLink>
    </div>
  );
};

export default Leave;
