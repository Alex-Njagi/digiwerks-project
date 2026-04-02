import { Box, Heading, Divider, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

function ProjectGrid({ projects = [] }) {
  const navigate = useNavigate()
  return (
    <Box mt={10} maxW="900px" mx="auto">

      <Flex align="center" justify="center" mb={3}>  
        <Heading size="md" color="brand.pink" textAlign="center">
            PROJECTS
        </Heading>  
      </Flex>

      <Divider mb={6} borderColor="brand.blue"/>

      {/* Responsive Grid */}
      <SimpleGrid minChildWidth="250px" spacing={6}>
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </SimpleGrid>

    </Box>
  );
}

export default ProjectGrid;