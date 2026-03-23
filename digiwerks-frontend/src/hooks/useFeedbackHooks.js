import { useState } from "react";
import { createFeedback } from "../services/feedbackService";

export function useCreateFeedback() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitFeedback = async (versionId, feedbackData) => {
    try {
      setLoading(true);
      setError(null);
      await createFeedback(versionId, feedbackData);
    } catch (err) {
      setError(err.response?.data || "Failed to create feedback");
    } finally {
      setLoading(false);
    }
  };

  return { submitFeedback, loading, error };
}