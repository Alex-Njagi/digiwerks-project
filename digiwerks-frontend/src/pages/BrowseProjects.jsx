import {
  Box,
  Heading,
  Text,
  Input,
  Divider,
  VStack,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";
import ProjectGrid from "../components/ProjectGrid";

import { useAllProjects } from "../hooks/useAllProjects";

export default function BrowseProjects() {
  const [search, setSearch] = useState("");

  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useAllProjects();
  const protectedMode = true;

  if (projectsLoading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" thickness="4px" color="brand.pink" />
        <Text>Loading projects...</Text>
      </Center>
    );
  }

  if (projectsError)
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
          <Heading textAlign="center" color="brand.blue">
            OOPS!
          </Heading>
          <Text textAlign="center" color="brand.pink" size="md">
            Sorry! {projectsError}!
          </Text>
        </VStack>
      </Box>
    );

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box p={8} maxW="1000px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading size="3xl" textAlign="center">
          Browse Projects
        </Heading>

        <Text color="gray.600">
          View all <b>{projects.length}</b> of our artists' incredible projects
          here
        </Text>

        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          borderColor="brand.blue"
        />
      </VStack>

      <ProjectGrid projects={filteredProjects} protectedMode={protectedMode} />
    </Box>
  );
}
