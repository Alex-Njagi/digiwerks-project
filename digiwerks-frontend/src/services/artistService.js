import apiClient from "./apiClient";

export const signupArtist = async (artistData) => {
  const response = await apiClient.post("/artists", artistData);
  return response.data;
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