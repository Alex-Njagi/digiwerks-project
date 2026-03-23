import { useState } from "react";
import { logoutArtist } from "../services/artistService";

export const useLogoutArtist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      await logoutArtist();
    } catch (err) {
      setError("Logout failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};