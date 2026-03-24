import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProjectWorkspace } from "../hooks/useProjectWorkspace";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import StagesGrid from "../components/StagesGrid";
import ProjectCoverImage from "../components/ProjectCoverImage";

export default function ProjectWorkspace() {
  const { id } = useParams();
  const { project, loading, error } = useProjectWorkspace(id);  

  if (loading) {
    return (
        <Center h="50vh" flexDirection="column" gap={4}>
            <Spinner size="xl" thickness="4px" color="brand.pink" />
            <Text>Loading project...</Text>
        </Center>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Box p={6}>

      <ProjectSummaryCard project = {project}/>
      <br />
      <ProjectCoverImage project={project} />
      <ProjectStats project = {project}/>
      <StagesGrid 
        project={project}
        stages={project.project_stages}
      />   
    </Box>
  );
}