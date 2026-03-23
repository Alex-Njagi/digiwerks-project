import { useState } from "react";
import { updateArtist } from "../services/artistService";

export default function useUpdateArtist() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (id, data) => {
    try {
      setLoading(true);
      setError(null);
      return await updateArtist(id, data);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateArtist: update, loading, error };
}