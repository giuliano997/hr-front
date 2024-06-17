import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  saveTimeEntry: async (entry) => {
    return api.post("/time-entry", entry);
  },
  saveVacationRequest: async (request) => {
    return api.post("/vacation-request", request);
  },
  getVacationRequests: async () => {
    const response = await api.get("/vacation-requests");
    return response.data;
  },
  approveVacationRequest: async (id) => {
    return api.post(`/vacation-request/${id}/approve`);
  },
  rejectVacationRequest: async (id) => {
    return api.post(`/vacation-request/${id}/reject`);
  },
};
