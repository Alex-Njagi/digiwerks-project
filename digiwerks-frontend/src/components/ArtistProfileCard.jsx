import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ArtistProfileCard({
  username = "ArtistName",
  bio = "This is the artist bio. It can be a short description about the creator.",
  profilePicture = ""
}) {

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
          src={profilePicture}
          name={username}
        />

        {/* Username + Bio */}
        <VStack align="start" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">
            {username}
          </Text>

          <Text color="gray.600">
            {bio}
          </Text>
        </VStack>

      </Flex>

      {/* Edit profile button */}
      <Flex justify="flex-end" mt={6}>
        <Button
          bg="brand.blue"
          color="white"
          _hover={{ bg: "brand.pink" }}
          onClick={() => navigate("/edit_profile")}
        >
          Edit Profile
        </Button>
      </Flex>

    </Box>
  );
}