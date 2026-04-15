import apiClient from "./apiClient";

export const getAsset = async (id) => {
  const res = await apiClient.get(`/project_assets/${id}`);
  return res.data;
};

export const createAsset = async (stageId, assetData) => {
  const res = await apiClient.post(
    `/project_stages/${stageId}/project_assets`,
    {
      asset: assetData,
    },
  );
  return res.data;
};

export const updateAsset = async (assetId, data) => {
  const response = await apiClient.put(`/project_assets/${assetId}`, data);
  return response.data;
};

export const deleteAsset = async (assetId) => {
  await apiClient.delete(`/project_assets/${assetId}`);
};