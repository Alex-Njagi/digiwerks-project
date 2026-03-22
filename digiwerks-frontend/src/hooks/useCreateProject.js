// hooks/useCreateProject.js
import { useState } from "react";
import { createProject } from "../services/projectService";

export function useCreateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitProject = async (projectData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await createProject(projectData);

      setSuccess(true);
    } catch (err) {
      setError(err.response?.data || "Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return { submitProject, loading, error, success };
}