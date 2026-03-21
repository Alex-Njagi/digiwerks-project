import {
  Box,
  Text,
  Tag,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AssetCard({asset}){

  const assetId = asset._id
  console.log(assetId);

  const openAsset = () => {
    navigate(`/assets/${assetId}`, {
      state: { asset }   // ← pass full asset object
    });
  };
  
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
      onClick={openAsset}
    >
      <VStack align="stretch" spacing={2}>

        <Text fontWeight="bold" color="brand.pink">
          {asset.asset_name}
        </Text>

        <Text fontSize="sm" color="gray.600">
          "{asset.asset_description}"
        </Text>

        <Text fontSize="sm" color="gray.600">
          Versions: <b></b>
        </Text>

        <Tag
          alignSelf="flex-start"
          bg="brand.pink"
          color="white"
        >
          {/* {tag} */}
        </Tag>

      </VStack>
    </Box>
  );
}