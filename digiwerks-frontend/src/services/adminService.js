import apiClient from "./apiClient";

export const loginAdmin = async (credentials) => {
  const response = await apiClient.post("/admin_login", credentials);
  return response.data;
};

export const getCurrentAdmin = async () => {
  const response = await apiClient.get("/current_admin");
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await apiClient.delete("/logout");
};

export const fetchAllArtists = async () => {
  const response = await apiClient.get("/admin/view_accounts");
  return response.data;
};