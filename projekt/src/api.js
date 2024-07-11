export const createWorkHour = async (workHourData) => {
  const response = await fetch("http://localhost:3000/api/workhours", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workHourData),
  });

  if (!response.ok) {
    throw new Error("Failed to create work hour");
  }

  return await response.json();
};

export const fetchLeaveRequests = async () => {
  const response = await fetch("http://localhost:3000/api/leaverequests");
  if (!response.ok) {
    throw new Error("Failed to fetch leave requests");
  }

  return await response.json();
};

export const createLeaveRequest = async (leaveRequestData) => {
  const response = await fetch("http://localhost:3000/api/leaverequests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leaveRequestData),
  });

  if (!response.ok) {
    throw new Error("Failed to create leave request");
  }

  return await response.json();
};

export const updateLeaveRequestStatus = async (id, status) => {
  const response = await fetch(
    `http://localhost:3000/api/leaverequests/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update leave request status");
  }

  return await response.json();
};
