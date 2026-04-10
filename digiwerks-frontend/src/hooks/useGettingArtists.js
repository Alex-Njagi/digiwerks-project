import { useEffect, useState } from "react";
import { getAllArtists, getOneArtist } from "../services/artistService";

export const useGetAllArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArtists = async () => {
    try {
      setLoading(true);
      const data = await getAllArtists();
      setArtists(data);
    } catch (err) {
      setError("Failed to fetch artists");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getArtists();
  }, []);

  return { artists, loading, error, refetch: getArtists };
};

export const useGetOneArtist = (id) => {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const getArtist = async () => {
      try {
        setLoading(true);
        const data = await getOneArtist(id);
        setArtist(data);
      } catch (err) {
        setError("Failed to load artist");
      } finally {
        setLoading(false);
      }
    };
    getArtist();
  }, [id]);

  return { artist, loading, error };
};