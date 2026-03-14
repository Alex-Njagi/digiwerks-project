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

function BrowseProjects() {

  const [search, setSearch] = useState("");

  const projects = [
    { id: 1, title: "Concept Art", thumbnail: "https://placehold.co/400x400"},
    { id: 2, title: "Character Design", thumbnail: "https://placehold.co/400x400"},
    { id: 3, title: "Fantasy World", thumbnail: "https://placehold.co/400x400"},
    { id: 4, title: "Sci-Fi Assets", thumbnail: "https://placehold.co/400x400"}
  ];

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