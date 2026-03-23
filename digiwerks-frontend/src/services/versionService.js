import apiClient from "./apiClient";

export const createVersion = async (assetId, versionData) => {
  const res = await apiClient.post(`/project_assets/${assetId}/asset_versions`, {
    asset_version: versionData
  });
  return res.data;
};

export const deleteVersion = async (versionId) => {
  await apiClient.delete(`/asset_versions/${versionId}`);
};