import { useState } from "react";
import { updateProject } from "../services/projectService";

export default function useUpdateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (id, data) => {
    try {
      setLoading(true);
      setError(null);
      return await updateProject(id, data);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProject: update, loading, error };
}