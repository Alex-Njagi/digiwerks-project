import { Box } from "@chakra-ui/react";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import StagesGrid from "../components/StagesGrid";

function ProjectWorkspace() {
  const project = {
    title: "Project Title",
    description: "This project contains artwork assets and versions for a larger creative pipeline.",
    status: "Active",
    startDate: "Jan 2025",
    endDate: "Dec 2025"
  }
  return (
    <Box p={6}>

      <ProjectSummaryCard project = {project}/>
      <ProjectStats />
      <StagesGrid />
      

    </Box>
  );
}

export default ProjectWorkspace;