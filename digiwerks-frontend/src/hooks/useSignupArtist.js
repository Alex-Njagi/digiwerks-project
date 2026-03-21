import { useState } from "react";
import { signupArtist } from "../services/artistService";

export const useSignupArtist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (artistData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await signupArtist(artistData);
      return data;
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};