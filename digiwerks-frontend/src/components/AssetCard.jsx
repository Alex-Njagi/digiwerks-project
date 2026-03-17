import {
  Box,
  Text,
  Tag,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AssetCard({
  name = "Asset Name",
  description = "Short description of the asset",
  tag = "Concept",
  versions = 3
}){

    const navigate = useNavigate();

  return (
    <Box
      border="3px solid"
      borderColor="brand.pink"
      borderRadius="lg"
      bg="white"
      p={4}
      boxShadow="sm"
      _hover={{
        transform: "scale(1.03)",
        borderColor: "brand.blue",
        boxShadow: "md"
      }}
      transition="0.2s"
      cursor="pointer"
      onClick={() => navigate("/asset_workspace")}
    >
      <VStack align="stretch" spacing={2}>

        <Text fontWeight="bold" color="brand.pink">
          {name}
        </Text>

        <Text fontSize="sm" color="gray.600">
          "{description}"
        </Text>

        <Text fontSize="sm" color="gray.600">
          Versions: <b>{versions}</b>
        </Text>

        <Tag
          alignSelf="flex-start"
          bg="brand.pink"
          color="white"
        >
          {tag}
        </Tag>

      </VStack>
    </Box>
  );
}