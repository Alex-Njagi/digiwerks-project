import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../utils/formatDate";

function ProjectSummaryCard({project}) {

  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      border="4px solid"
      borderColor="brand.blue"
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
          {project.title}
        </Heading>

        {/* Description + Status */}
        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {project.description}
          </Text>

          <Text>
            <b>Status:</b> {project.status}
          </Text>

          {/* <ProjectCard project={project} /> */}
        </VStack>

        {/* Dates */}
        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold">Creation Date: </Text>
            <Text>{formatDateTime(project.created_at)}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold">Last Modified: </Text>
            <Text>{formatDateTime(project.updated_at)}</Text>
          </HStack>
        </HStack>

        {/* Edit Button */}
        <Flex justify="flex-end" mt={4}>
          <Button
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
            onClick={() => navigate("/project/edit", { state: { project } })}
          >
            Edit Project
          </Button>
        </Flex>

      </VStack>
    </Box>
  );
}

export default ProjectSummaryCard;