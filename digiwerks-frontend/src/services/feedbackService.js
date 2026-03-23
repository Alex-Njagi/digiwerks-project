import apiClient from "./apiClient";

export const createFeedback = async (versionId, feedbackData) => {
  const res = await apiClient.post(`/asset_versions/${versionId}/feedbacks`, {
    feedback: feedbackData
  });
  return res.data;
};