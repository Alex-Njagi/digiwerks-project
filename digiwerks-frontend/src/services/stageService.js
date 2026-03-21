import apiClient from "./apiClient";

export const fetchProjectStages = async () => {
  const response = await apiClient.get(`/projects/${id}/project_stages`);
  return response.data;
};