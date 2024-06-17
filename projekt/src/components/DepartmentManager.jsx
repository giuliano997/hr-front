import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../services/apiService";

function DepartmentManager() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch vacation requests
    const fetchRequests = async () => {
      const data = await apiService.getVacationRequests();
      setRequests(data);
    };

    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    await apiService.approveVacationRequest(id);
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleReject = async (id) => {
    await apiService.rejectVacationRequest(id);
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <div>
      <h1>Urlaubsanträge verwalten</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.dates}
            <button onClick={() => handleApprove(request.id)}>Annehmen</button>
            <button onClick={() => handleReject(request.id)}>Ablehnen</button>
          </li>
        ))}
      </ul>
      <Link to="/">Zurück</Link>
    </div>
  );
}

export default DepartmentManager;
