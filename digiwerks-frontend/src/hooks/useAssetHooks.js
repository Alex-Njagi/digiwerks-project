import { useState, useEffect } from "react";
import { createAsset } from "../services/assetService";
import { deleteAsset } from "../services/assetService";
import { getAsset } from "../services/assetService";

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

export function useAsset(id) {
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        setLoading(true);
        const data = await getAsset(id);
        setAsset(data);
      } catch (err) {
        setError(err.response?.data || "Failed to fetch asset");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAsset();
  }, [id]);

  return { asset, loading, error };
}