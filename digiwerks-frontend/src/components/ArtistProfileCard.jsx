import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ArtistProfileCard({artist}) {

  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      border="4px solid"
      borderColor="brand.pink"
      backgroundColor="transparent"
      borderRadius="xl"
      boxShadow="md"
      p={6}
      w="100%"
      maxW="900px"
      mx="auto"
      mt={8}
    >
      <Flex align="center" gap={6}>
        
        {/* Profile Picture */}
        <Avatar
          size="2xl"
          src={artist.profile_image_url}
          alt={artist.username}
        />

        {/* Username + Bio */}
        <VStack align="start" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">
            {artist.username}
          </Text>

          <Text color="gray.600">
            {artist.bio}
          </Text>
        </VStack>

      </Flex>

      {/* Edit profile button */}
      <Flex justify="flex-end" mt={6}>
        <Button
          bg="brand.blue"
          color="white"
          _hover={{ bg: "brand.pink" }}
          onClick={() => navigate("/artist/edit")}
        >
          Edit Profile
        </Button>
      </Flex>

    </Box>
  );
}