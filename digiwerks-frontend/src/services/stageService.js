import apiClient from "./apiClient";

export const fetchProjectStages = async () => {
  const response = await apiClient.get(`/projects/${id}/project_stages`);
  return response.data;
};

export const createProjectStage = async (projectId, stageData) => {
  const res = await apiClient.post(`/projects/${projectId}/project_stages`, {
    project_stage: stageData
  });
  return res.data;
};

export const updateProjectStage = async (stageId, data) => {
  const response = await apiClient.put(`/project_stages/${stageId}`, data);
  return response.data;
};

export const deleteProjectStage = async (stageId) => {
  await apiClient.delete(`/project_stages/${stageId}`);
};