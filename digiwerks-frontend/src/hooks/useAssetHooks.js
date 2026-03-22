import { useState } from "react";
import { createAsset } from "../services/assetService";
import { deleteAsset } from "../services/assetService";

export function useCreateAsset() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitAsset = async (stageId, assetData) => {
    try {
      setLoading(true);
      setError(null);
      return await createAsset(stageId, assetData);
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitAsset, loading, error };
}

export function useDeleteAsset() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteAsset(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteAsset: remove, loading, error };
}