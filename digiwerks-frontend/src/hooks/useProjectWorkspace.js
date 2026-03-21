import { useState, useEffect } from "react";
import { getProjectWorkspace } from "../services/projectService";

export const useProjectWorkspace = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchWorkspace = async () => {
      try {
        setLoading(true);
        const data = await getProjectWorkspace(id);
        setProject(data);
      } catch (err) {
        setError("Failed to load workspace");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspace();
  }, [id]);

  return { project, loading, error };
};