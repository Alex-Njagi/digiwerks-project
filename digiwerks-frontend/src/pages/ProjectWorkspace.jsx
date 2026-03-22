import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import { useProject } from "../hooks/useProject";
import { useProjectWorkspace } from "../hooks/useProjectWorkspace";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import StagesGrid from "../components/StagesGrid";

function ProjectWorkspace() {
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

  // const stages = project.project_stages
  // console.log(stages);
  
  // const assets = project.project_stages.map(stage => stage.assets)
  // console.log(assets);  

  return (
    <Box p={6}>

      <ProjectSummaryCard project = {project}/>
      <ProjectStats project = {project}/>
      <StagesGrid 
        stages={project.project_stages}
      />
      

    </Box>
  );
}

export default ProjectWorkspace;