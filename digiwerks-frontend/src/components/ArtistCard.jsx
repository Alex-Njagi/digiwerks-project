import { Box, Flex, Avatar, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artists/${artist._id}`);
  };

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
      _hover={{
        transform: "scale(1.01)",
        borderColor: "brand.blue",
        boxShadow: "lg",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Flex align="center" gap={6}>
        <Avatar
          size="sm"
          src={artist.profile_image_url}
          alt={artist.username}
        />
        <VStack align="start" spacing={2}>
          <Text fontSize="sm" fontWeight="bold">
            {artist.username}
          </Text>
          <Text color="gray.600">{artist.bio}</Text>
        </VStack>
      </Flex>
    </Box>
  );
}
