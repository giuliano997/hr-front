import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../services/apiService";

function TimeEntry() {
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert time to hours and minutes
    const [hours, minutes] = time.split(":").map(parseFloat);
    const totalHours = hours + minutes / 60;

    // Check if total hours require a break
    let breakTime = 0;
    if (totalHours >= 6 && totalHours < 9) {
      breakTime = 30; // 30 minutes break for 6-8.99 hours
    } else if (totalHours >= 9) {
      breakTime = 45; // 45 minutes break for 9+ hours
    }

    // Save time entry
    try {
      await apiService.saveTimeEntry({ time, breakTime });
      setTime("");
      setError("");
    } catch (err) {
      setError("Failed to save time entry.");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Arbeitszeit eintragen</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Zeit (Format: hh:mm):
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <button type="submit">Eintragen</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/">Zurück</Link>
    </div>
  );
}

export default TimeEntry;
