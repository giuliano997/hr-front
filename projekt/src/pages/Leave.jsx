import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import React, { useState } from "react";

const Leave = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const leaveRequestData = { userId, startDate, endDate };
    try {
      await createLeaveRequest(leaveRequestData);
      alert("Leave request submitted successfully!");
    } catch (error) {
      alert("Failed to submit leave request");
    }
  };

  return (
    <div>
      <h2>Urlaubstage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ButtonLink to="/home">Zurück zur Startseite</ButtonLink>
    </div>
  );
};

export default Leave;
