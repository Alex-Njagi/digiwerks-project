import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Tag,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDeleteAsset } from "../hooks/useAssetHooks";

export default function AssetSummaryCard({asset}) {
  const navigate = useNavigate();
  const projectTitle = asset.project_stage?.project?.title
  const artistName = asset.project_stage?.project?.artist?.username 
  const projectId = asset.project_stage?.project?._id  

  const assetId = asset._id
  const { deleteAsset, loading: deleteLoading, error: deleteError } = useDeleteAsset();

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
      bg="white"
      border="4px solid"
      borderColor="brand.pink"
      borderRadius="xl"
      boxShadow="lg"
      p={8}
      maxW="900px"
      mx="auto"
      mt={6}
    >
      <VStack spacing={4} align="stretch">

        {/* Project Title */}
        <Heading textAlign="center">
          {asset.asset_name}
        </Heading>

        {/* Description + Status */}
        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {asset.asset_description}
          </Text>

          <Tag
            alignSelf="flex-center"
            bg="brand.blue"
            color="white"
            margin="2px"
            >
              {asset.asset_tag}
          </Tag>
        </VStack>

        {/* Ownership */}
        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold" color="brand.pink">Owner: </Text>
            <Text color="brand.blue">{artistName}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold" color="brand.pink">Project: </Text>
            <Link onClick={()=>navigate(`/projects/${projectId}`)} color="brand.blue">{projectTitle}</Link>
          </HStack>
        </HStack>

        <Flex justify="space-between" mt={2}>
          <Button
            size="sm"
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
            // onClick={() => navigate("/project_asset/edit", { state: { asset } })}
          >
            Edit Asset
          </Button>

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