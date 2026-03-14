import { Box, Heading, Divider, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects = [] }) {
  return (
    <Box mt={10} maxW="900px" mx="auto">

      {/* Section Header */}
      <Heading size="md" mb={3} color="brand.pink" textAlign="center">
        PROJECTS
      </Heading>

      <Divider mb={6} borderColor="brand.blue" />

      {/* Responsive Grid */}
      <SimpleGrid minChildWidth="250px" spacing={6}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
          />
        ))}
      </SimpleGrid>

    </Box>
  );
}

export default ProjectGrid;