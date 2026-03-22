import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import AssetCard from "./AssetCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDeleteProjectStage from "../hooks/useDeleteStage";

function StageCard({stage, project}) {
  // console.log(projectId);
  
  const { deleteStage, loading: deleteLoading, error: deleteError } = useDeleteProjectStage();
  // const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this stage? This cannot be undone."
    );
    if (!confirmed) return;
    try {
        await deleteStage(stage._id);
        alert("Your project stage has been deleted successfully!");
        window.location.reload()
    } catch (error) {
        console.error(error);
        alert("Failed to delete stage.");
    }
  };

  return (
    <Flex align="flex-start" gap={4} position="relative">

      {/* Diamond marker */}
      <Box
        w="14px"
        h="14px"
        bg="brand.blue"
        transform="rotate(45deg)"
        mt="8px"
        position="relative"
        zIndex="2"
        />

      {/* Stage content */}
      <Box
        flex="1"
        bg="white"
        borderRadius="lg"
        border="3px solid"
        borderColor="brand.blue"
        p={5}
        boxShadow="md"
      >
        <VStack align="stretch" spacing={3}>

          {/* Date */}
          <Text fontSize="sm" color="gray.500">
            Date: {stage.created_at}
          </Text>

          {/* Name + Description */}
           <Flex align="center" justify="space-between" mb={3}>
                <Text fontWeight="bold" textAlign="left">
                <b>Stage {stage.stage_order}:</b> {stage.stage_name} — {stage.description}
                </Text>
        
                {/* Add Asset Button */}
                <Button
                    size="sm"
                    bg="brand.pink"
                    color="white"
                    _hover={{ bg: "brand.blue" }}
                    onClick={() => navigate("/project_asset/create")}
                >
                    + New Asset
                </Button>
            </Flex>

          {/* Asset previews */}
          <SimpleGrid minChildWidth="120px" spacing={3}>
            {stage.assets.map(asset => (
            <AssetCard
                key={asset._id}
                asset={asset}
            />
            ))}
            </SimpleGrid>

          {/* Buttons */}
          <Flex justify="space-between" mt={2}>
            <Button
              size="sm"
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => navigate("/project_stage/edit", { state: { stage, project} })}
            >
              Edit Stage
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
              Delete Stage
            </Button>
            {(deleteError) && (
                <Text color="red.500" fontSize="sm">
                {deleteError?.message}
                </Text>
            )} 
          </Flex>

        </VStack>
      </Box>
    </Flex>
  );
}

export default StageCard;