import apiClient from "./apiClient";

export const createAsset = async (stageId, assetData) => {
  const res = await apiClient.post(`/project_stages/${stageId}/project_assets`, {
    asset: assetData
  });
  return res.data;
};

export const deleteAsset = async (assetId) => {
  await apiClient.delete(`/project_assets/${assetId}`);
};