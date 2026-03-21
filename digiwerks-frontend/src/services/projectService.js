import apiClient from "./apiClient";

export const fetchAllProjects = async () => {
  const response = await apiClient.get("/projects");
  return response.data;
};

export const fetchOwnedProjects = async () => {
  const response = await apiClient.get("/my_projects"); // uses session, no ID needed
  return response.data;
};