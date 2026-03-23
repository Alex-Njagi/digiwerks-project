import { useState } from "react";
import { deleteProjectStage } from "../services/stageService";

export default function useDeleteProjectStage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteProjectStage(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteStage: remove, loading, error };
}