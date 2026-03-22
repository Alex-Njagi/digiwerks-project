import { useState } from "react";
import { createProjectStage } from "../services/stageService";

export default function useCreateProjectStage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createStage = async (projectId, stageData) => {
    try {
      setLoading(true);
      setError(null);
      return await createProjectStage(projectId, stageData);
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createStage, loading, error };
}