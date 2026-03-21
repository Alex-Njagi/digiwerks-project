import {
  Box,
  Heading,
  Text,
  Input,
  Divider,
  VStack
} from "@chakra-ui/react";

import { useState } from "react";
import ProjectGrid from "../components/ProjectGrid";

import { useAllProjects } from "../hooks/useAllProjects";

function BrowseProjects() {

  const [search, setSearch] = useState("");

  const { projects, loading: projectsLoading, error: projectsError } = useAllProjects();
    
  if (projectsLoading) return <p>Loading...</p>;
  if (projectsError) return <p>{projectsError}</p>;  

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={8} maxW="1000px" mx="auto">

      <VStack spacing={4} align="start">

        <Heading size="3xl" textAlign="center">
          Browse Projects
        </Heading>

        <Text color="gray.600">
          View our artists' incredible catalogue here
        </Text>

        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          borderColor="brand.blue"
        />

      </VStack>

      <ProjectGrid projects={filteredProjects} />

    </Box>
  );
}

export default BrowseProjects;