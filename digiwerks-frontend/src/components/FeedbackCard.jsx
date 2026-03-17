import {
  Box,
  Text,
  Divider,
  Button,
  Textarea
} from "@chakra-ui/react";

export default function FeedbackCard({ feedbacks }) {
  const hasFeedback = Array.isArray(feedbacks) && feedbacks.length > 0;

  return (
    <>
        <Box p={4} bg="gray.50" borderRadius="md">
        <Text fontWeight="semibold" mb={2}>
            Feedback
        </Text>

        {hasFeedback ? (
            feedbacks.map((feedback) => (
            <Text key={feedback.id} fontSize="sm" color="gray.600">
                <b>{feedback.author}</b>: {feedback.body}
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
            <Textarea placeholder="Say something..." mb={5}/>

            <Button
            size="sm"
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
          >
            Submit
          </Button>
        </Box>
    </>
  );
}