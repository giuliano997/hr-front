import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import React, { useState } from "react";
import "./global.css";

const Time = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [breakStart, setBreakStart] = useState("");
  const [breakEnd, setBreakEnd] = useState("");

  const validateBreaks = () => {
    const hoursWorkedNum = parseFloat(hoursWorked);

    if (hoursWorkedNum > 6 && hoursWorkedNum < 9) {
      if (
        !breakStart ||
        !breakEnd ||
        (new Date(`1970-01-01T${breakEnd}:00Z`) -
          new Date(`1970-01-01T${breakStart}:00Z`)) /
          (1000 * 60) <
          30
      ) {
        return "Ab 6 Stunden Arbeit muss eine Pause von 30 Minuten genommen werden.";
      }
    } else if (hoursWorkedNum >= 9) {
      if (
        !breakStart ||
        !breakEnd ||
        (new Date(`1970-01-01T${breakEnd}:00Z`) -
          new Date(`1970-01-01T${breakStart}:00Z`)) /
          (1000 * 60) <
          45
      ) {
        return "Ab 9 Stunden Arbeit muss eine Pause von 45 Minuten genommen werden.";
      }
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateBreaks();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const workHourData = {
      userId,
      workDate,
      hoursWorked,
      breakStart,
      breakEnd,
    };
    try {
      await createWorkHour(workHourData);
      alert("Die Arbeitszeit wurde erfolgreich eingetragen");
    } catch (error) {
      alert("Die Arbeitszeit konnte nicht eingetragen werden.");
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Arbeitszeit</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Arbeitsdatum:</label>
          <input
            type="date"
            value={workDate}
            onChange={(e) => setWorkDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gearbeitete Stunden:</label>
          <input
            type="number"
            step="0.25"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Pausenbeginn</label>
          <input
            type="time"
            value={breakStart}
            onChange={(e) => setBreakStart(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pausenende:</label>
          <input
            type="time"
            value={breakEnd}
            onChange={(e) => setBreakEnd(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Senden
        </button>
      </form>
      <ButtonLink to="/home" className="button-link">
        Zurück zur Startseite
      </ButtonLink>
    </div>
  );
};

export default Time;
