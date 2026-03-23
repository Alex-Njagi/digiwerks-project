import { useState } from "react";
import { updateProjectStage } from "../services/stageService";

export default function useUpdateStage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (id, data) => {
    try {
      setLoading(true);
      setError(null);
      return await updateProjectStage(id, data);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateStage: update, loading, error };
}