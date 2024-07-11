import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { fetchLeaveRequests, updateLeaveRequestStatus } from "../api";
import "./global.css";
import { useSessionStorage } from "usehooks-ts";

const Requests = () => {
  const navigate = useNavigate();
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [userId] = useSessionStorage("userId", undefined, {
    deserializer: (value) => parseInt(value, 10),
  });

  useEffect(() => {
    const getLeaveRequests = async () => {
      try {
        const requests = await fetchLeaveRequests();
        setLeaveRequests(requests);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };
    getLeaveRequests();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const updatedRequest = await updateLeaveRequestStatus(id, status);
      setLeaveRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id ? updatedRequest : request
        )
      );
    } catch (error) {
      console.error("Error updating leave request status:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Urlaubsanträge</h2>
      <table className="requests-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Anfangsdatum</th>
            <th>Enddatum</th>
            <th>Status</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.user_id}</td>
              <td>{request.start_date}</td>
              <td>{request.end_date}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && request.user_id !== userId && (
                  <>
                    <button
                      className="button"
                      onClick={() => handleStatusChange(request.id, "Rejected")}
                    >
                      Ablehnen
                    </button>
                    <button
                      className="button"
                      onClick={() => handleStatusChange(request.id, "Approved")}
                    >
                      Akzeptieren
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonLink to="/home" className="button-link">
        Zurück zur Startseite
      </ButtonLink>
    </div>
  );
};

export default Requests;
