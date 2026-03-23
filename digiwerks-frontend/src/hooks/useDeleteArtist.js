import { useState } from "react";
import { deleteArtist } from "../services/artistService";

export default function useDeleteArtist() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteArtist(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteArtist: remove, loading, error };
}