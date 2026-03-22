import {
  Box,
  Text,
  Tag,
  VStack,
  Flex,
  Button
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { useDeleteAsset } from "../hooks/useAssetHooks";

export default function AssetCard({projectId, asset}){
  console.log(projectId);
  
  const assetId = asset._id
  const { deleteAsset, loading: deleteLoading, error: deleteError } = useDeleteAsset();

  const openAsset = () => {
    navigate(`/assets/${assetId}`, {
      state: { asset }   // ← pass full asset object
    });
  };
  
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this asset? This cannot be undone."
    );
    if (!confirmed) return;
    try {
        await deleteAsset(assetId);
        alert("Your asset has been deleted successfully!");
        navigate(`/projects/${projectId}`)
    } catch (error) {
        console.error(error);
        alert("Failed to delete asset.");
    }
  };

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
          Versions: <b>{asset.asset_versions.length}</b>
        </Text>

        <Tag
          alignSelf="flex-start"
          bg="brand.pink"
          color="white"
        >
          {asset.asset_tag}
        </Tag>

        <Flex justify="flex-end" mt={2}>
          <Button
              size="sm"
              bg="red.400"
              color="white"
              _hover={{ bg: "red.500" }}
              onClick={handleDelete}
              isLoading={deleteLoading}
              loadingText="Deleting..."
            >
              Delete Asset
            </Button>
            {(deleteError) && (
                <Text color="red.500" fontSize="sm">
                {deleteError?.message}
                </Text>
            )} 
        </Flex>

      </VStack>
    </Box>
  );
}