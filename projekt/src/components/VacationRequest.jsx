import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../services/apiService";

function VacationRequest() {
  const [dates, setDates] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call backend to save vacation request
    await apiService.saveVacationRequest({ dates });
  };

  return (
    <div>
      <h1>Urlaub beantragen</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Daten:
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
        </label>
        <button type="submit">Beantragen</button>
      </form>
      <Link to="/">Zurück</Link>
    </div>
  );
}

export default VacationRequest;
