import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Collapse,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Center
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../utils/formatDate";
import ProjectCoverImage from "./ProjectCoverImage";
import { useState } from "react";

function ProjectSummaryCard({ project, protectedMode }) {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      bg="white"
      border="4px solid"
      borderColor="brand.blue"
      borderRadius="xl"
      p={8}
      maxW="900px"
      mx="auto"
      mt={6}
    >
      <VStack spacing={4} align="stretch">
        <Heading textAlign="center">{project.title}</Heading>

        <HStack justify="center">
          <Text fontWeight="bold">By: </Text>
          <Link
            onClick={() =>
              navigate(`/artists/${project?.artist._id}`, {
                state: { protectedMode: protectedMode },
              })
            }
            _hover={{ color: "brand.pink" }}
          >
            {project?.artist.username}
          </Link>
        </HStack>

        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {project.description}
          </Text>

          <Text>
            <b>Status:</b> {project.status}
          </Text>
        </VStack>

        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold">Creation Date: </Text>
            <Text>{formatDateTime(project.created_at)}</Text>
          </HStack>

          <HStack>
            {project.status === "Complete" ? (
              <Text fontWeight="bold">Completion date: </Text>
            ) : (
              <Text fontWeight="bold">Last updated: </Text>
            )}
            <Text>{formatDateTime(project.updated_at)}</Text>
          </HStack>
        </HStack>

        {protectedMode === true ? (
          <Flex justify="center" mt={2}>
            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => setShowImage(!showImage)}
            >
              {showImage ? "Hide Cover" : "Show Cover"}
            </Button>
          </Flex>
        ) : (
          <Flex justify="space-between" mt={2}>
            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => setShowImage(!showImage)}
            >
              {showImage ? "Hide Cover" : "Show Cover"}
            </Button>
            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => navigate("/project/edit", { state: { project } })}
            >
              Edit Project
            </Button>
          </Flex>
        )}

        <Box
          onClick={() => setIsModalOpen(true)}
          cursor="pointer"
          _hover={{ opacity: 0.9, transform: "scale(1.02)" }}
          transition="0.2s"
        >
          <Collapse in={showImage} animateOpacity>
            <ProjectCoverImage project={project} />
          </Collapse>
        </Box>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="4xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" />

          <ModalBody>
            <Center>
              <Image
                src={project.cover_img}
                maxH="80vh"
                borderRadius="lg"
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProjectSummaryCard;
