import {
  Box,
  Text,
  Divider,
  Button,
  Textarea
} from "@chakra-ui/react";
import { useCreateFeedback } from "../hooks/useFeedbackHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackCard({versionId, feedbacks}) {
  const hasFeedback = Array.isArray(feedbacks) && feedbacks.length > 0;
  // console.log(versionId);
  
  const { submitFeedback, loading: createLoading, error: createError } = useCreateFeedback();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
      asset_version_id: versionId,
      comment_text: " "
  }); 

  const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });        
  };

  const handleSubmit = async () => {
    try {
        setSubmitting(true);
        let payload = { ...form };        
        await submitFeedback(versionId, payload);
        alert("feedback successfully received! Thank you");
        window.location.reload()         
    } catch (error) {
        console.error(error);
        alert(`Oops! Something went wrong! Please try again.`)
    } finally {
        setSubmitting(false);
    }
  };    

  return (
    <>
        <Box p={4} bg="gray.50" borderRadius="md">
        <Text fontWeight="semibold" mb={2}>
            What others had to say:
        </Text>

        {hasFeedback ? (
            feedbacks.map((feedback) => (              
            <Text key={feedback._id} fontSize="sm" color="gray.600">
                <b>{feedback.artist.username}</b>: {feedback.comment_text}
            </Text>
            ))
        ) : (
            <Text fontSize="sm" color="gray.600">
            No feedback yet. Be the first to make one!
            </Text>
        )}
        </Box>

        <Divider borderColor="brand.pink"/>

        {/* Submit Feedback */}
        <Box
            p={4}
            bg="brand.pastelPink"
            borderRadius="md"
        >
            <Textarea 
            color="brand.blue"
            placeholder="Say something..." mb={5}
            required
            value={form.comment_text}
            onChange={handleChange("comment_text")}/>

            <Button
            size="sm"
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
            onClick={handleSubmit}
            isLoading={submitting || createLoading }
            loadingText="Submitting...">
            Submit
          </Button>

          {(createError) && (
                <Text color="red.500" fontSize="sm">
                {createError?.message}
                </Text>
          )}  
        </Box>
    </>
  );
}