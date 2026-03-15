import { Box } from "@chakra-ui/react";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import ProjectStages from "../components/ProjectStages";

function ProjectWorkspace() {
  return (
    <Box p={6}>

      <ProjectSummaryCard />
      <ProjectStats />
      <ProjectStages />
      

    </Box>
  );
}

export default ProjectWorkspace;