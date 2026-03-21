import { useState } from "react";
import { loginArtist } from "../services/artistService";

export const useLoginArtist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [artist, setArtist] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const data = await loginArtist({ email, password });

      setArtist(data.artist); // store logged-in user
      return data;

    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else if (err.response?.status === 404) {
        setError("Account not found");
      } else {
        setError("Login failed. Try again.");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, artist };
};