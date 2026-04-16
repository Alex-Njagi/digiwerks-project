import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ProjectForm from "../components/forms/ProjectForm";
import { useCurrentArtist } from "../hooks/useCurrentArtist";

export default function CreateProject() {
  const {
    error: artistError,
  } = useCurrentArtist();

  if (artistError)
    return (
      <Box
        bg="white"
        border="4px solid"
        borderColor="red.400"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
        maxW="900px"
        mx="auto"
        mt={6}
      >
        <VStack spacing={4} align="stretch">
          <Heading textAlign="center" color="brand.blue">
            OOPS!
          </Heading>
          <Text textAlign="center" color="brand.pink" size="md">
            Sorry! You must be logged in to continue!
          </Text>
        </VStack>
      </Box>
    );

  return (
    <>
      <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
        Create Your Project Today!
      </Heading>

      <ProjectForm mode="create" initialData={null} />
    </>
  );
}
