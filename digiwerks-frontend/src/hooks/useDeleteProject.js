import { useState } from "react";
import { deleteProject } from "../services/projectService";

export default function useDeleteProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteProject(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteProject: remove, loading, error };
}