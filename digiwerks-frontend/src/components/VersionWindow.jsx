import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Divider,
  Heading,
  Button
} from "@chakra-ui/react";
import FeedbackCard from "./FeedbackCard";
import { useNavigate } from "react-router-dom";
import { useDeleteVersion } from "../hooks/useVersionHooks";

export default function VersionWindow ({ isOpen, onClose, version, asset }) {
  const feedbacks = version.feedbacks
  // console.log(version);

  const assetName = asset.asset_name
  const projectTitle = asset.project_stage?.project?.title
  const artistName = asset.project_stage?.project?.artist?.username  

  const { deleteVersion, loading: deleteLoading, error: deleteError } = useDeleteVersion();
    const navigate = useNavigate();
  
    const handleDelete = async () => {
      const confirmed = window.confirm(
          "Are you sure you want to delete this version? This cannot be undone."
      );
      if (!confirmed) return;
      try {
          await deleteVersion(version._id);
          alert("Your asset version has been deleted successfully!");
          window.location.reload()
      } catch (error) {
          console.error(error);
          alert("Failed to delete version.");
      }
    }; 

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent bg="white" maxH="90vh">
        <ModalBody p={0}>
          <Flex h="90vh">
            
            {/* LEFT — ARTWORK */}
            <Flex
              flex="1"
              bg="black"
              align="center"
              justify="center"
            >
              <Image
                src= {version.file_url}
                alt="Version artwork"
                maxH="100%"
                maxW="100%"
                objectFit="contain"
              />
            </Flex>

            {/* RIGHT — INFO PANEL */}
            <Flex
              flex="1"
              direction="column"
              p={6}
              overflowY="auto"
            >
              <VStack align="stretch" spacing={4}>
                
                {/* Asset Header */}
                <Box>
                  <Heading size="md" color="brand.pink">{assetName}</Heading>
                  <Text fontSize="sm" color="gray.500">
                    Version Number: {version.version_number}
                  </Text>
                  <Text fontSize="sm" color="brand.blue">
                    {artistName} — {projectTitle}
                  </Text>
                </Box>

                <Divider borderColor="brand.pink"/>

                {/* Description */}
                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    Description
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    {version.change_notes}
                  </Text>
                </Box>

                <Button
                  size="sm"
                  bg="brand.pink"
                  color="white"
                  _hover={{ bg: "brand.blue" }}
                  onClick={handleDelete}
                  isLoading={deleteLoading}
                  loadingText="Deleting..."
                >
                  Delete Version
                </Button>
                {(deleteError) && (
                  <Text color="red.500" fontSize="sm">
                  {deleteError?.message}
                  </Text>
                )} 

                <Divider borderColor="brand.blue"/>
                
                <FeedbackCard 
                  feedbacks={feedbacks}
                  versionId={version._id}
                />
              </VStack>
            </Flex>

          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};