import { Box, Heading, Divider, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <Box mt={10} maxW="900px" mx="auto">

      {/* Section Header */}
      <Heading size="md" mb={3} color="brand.pink" textAlign="center">
        PROJECTS
      </Heading>

      <Divider mb={6} borderColor="brand.blue" />

      {/* Responsive Grid */}
      <SimpleGrid
        minChildWidth="250px"
        spacing={6}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>

    </Box>
  );
}

export default ProjectGrid;