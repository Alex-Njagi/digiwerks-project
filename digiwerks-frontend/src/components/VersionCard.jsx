import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function VersionCard ({title, thumbnail}) {
  const navigate = useNavigate();
  
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      border="3px solid"
      borderColor="brand.pink"
      bg="white"
      boxShadow="md"
      cursor="pointer"
      transition="0.2s"
      _hover={{
        transform: "scale(1.03)",
        borderColor: "brand.blue",
        boxShadow: "lg"
      }}
      onClick={() => navigate("/project_workspace")}
    >

      <Image
        src={thumbnail}
        alt={title}
        w="100%"
        aspectRatio="1 / 1"
        objectFit="cover" />

      <Box p={3}>
        <Text fontWeight="bold">Version: {title}</Text>
      </Box>
    </Box>
  );
}