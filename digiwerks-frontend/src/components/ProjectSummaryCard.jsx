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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../utils/formatDate";
import ProjectCoverImage from "./ProjectCoverImage";
import { useState } from "react";

function ProjectSummaryCard({ project, protectedMode }) {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

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
        {/* Project Title */}
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

        {/* Description + Status */}
        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {project.description}
          </Text>

          <Text>
            <b>Status:</b> {project.status}
          </Text>

          {/* {project.status === "Complete" ?
            <HStack>
              <Text fontWeight="bold">Completion Date: </Text>
              <Text>{formatDateTime(project.updated_at)}</Text>
            </HStack>
          : null} */}
        </VStack>

        {/* Dates */}
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

        <Box>
          <Collapse in={showImage} animateOpacity>
            <ProjectCoverImage project={project} />
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
}

export default ProjectSummaryCard;
