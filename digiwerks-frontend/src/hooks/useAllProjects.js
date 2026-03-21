import { useState, useEffect } from "react";
import { fetchAllProjects } from "../services/projectService";

export const useAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProjects();
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