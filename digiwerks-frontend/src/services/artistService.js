import apiClient from "./apiClient";

export const signupArtist = async (artistData) => {
  const response = await apiClient.post("/artists", artistData);
  return response.data;
};

export const updateArtist = async (artistId, data) => {
  const response = await apiClient.put(`/artists/${artistId}`, data);
  return response.data;
};

export const deleteArtist = async (artistId) => {
  await apiClient.delete(`/artists/${artistId}`);
};

export const loginArtist = async (credentials) => {
  const response = await apiClient.post("/artist_login", credentials);
  return response.data;
};

export const getCurrentArtist = async () => {
  const response = await apiClient.get("/current_artist");
  return response.data;
};

export const logoutArtist = async () => {
  const response = await apiClient.delete("/logout");
  return response.data; // optional, Rails might not return anything
};

export const fetchArtistStats = async () => {
  const response = await apiClient.get("/artist_stats");
  return response.data;
};