import { useEffect, useState } from "react";
import { getCurrentArtist } from "../services/artistService";

export const useCurrentArtist = () => {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const data = await getCurrentArtist();
        setArtist(data);
      } catch (err) {
        setError("Not authenticated");
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, []);

  return { artist, loading, error };
};