import { useState } from "react";
import { createVersion } from "../services/versionService";
import { deleteVersion } from "../services/versionService";

export function useCreateVersion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitVersion = async (assetId, versionData) => {
    try {
      setLoading(true);
      setError(null);
      await createVersion(assetId, versionData);
    } catch (err) {
      setError(err.response?.data || "Failed to create version");
    } finally {
      setLoading(false);
    }
  };

  return { submitVersion, loading, error };
}

export function useDeleteVersion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteVersion(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteVersion: remove, loading, error };
}