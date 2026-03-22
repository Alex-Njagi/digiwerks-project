import apiClient from "./apiClient";

export const fetchAllProjects = async () => {
  const response = await apiClient.get("/projects");
  return response.data;
};

export const fetchOwnedProjects = async () => {
  const response = await apiClient.get("/my_projects"); // uses session, no ID needed
  return response.data;
};

export const getProject = async (id) => {
  const response = await apiClient.get(`/projects/${id}`);
  return response.data;
};

export const getProjectWorkspace = async (id) => {
  const res = await apiClient.get(`/projects/${id}/workspace`);
  return res.data;
};

export const createProject = async (projectData) => {
  const res = await apiClient.post("/projects", {
    project: projectData
  });
  return res.data;
};

export const updateProject = async (projectId, data) => {
  const response = await apiClient.put(`/projects/${projectId}`, data);
  return response.data;
};

export const deleteProject = async (projectId) => {
  await apiClient.delete(`/projects/${projectId}`);
};