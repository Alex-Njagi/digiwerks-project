import { useState, useEffect } from "react";
import { fetchOwnedProjects } from "../services/projectService";

export const useOwnedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchOwnedProjects();
      setProjects(data);
    } catch (err) {
      setError("Failed to fetch projects");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
};