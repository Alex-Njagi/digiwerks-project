import { useState, useEffect } from "react";
import { fetchArtistStats } from "../services/artistService";

export const useArtistStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStats = async () => {
    try {
      setLoading(true);
      const data = await fetchArtistStats();
      setStats(data);
    } catch (err) {
      setError("Failed to fetch stats");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return { stats, loading, error, refetch: getStats };
};