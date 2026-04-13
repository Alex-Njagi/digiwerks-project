import {
  Box,
  Button,
  Center,
  Image,
  Spinner,
  Text,
  Collapse,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useProjectWorkspace } from "../hooks/useProjectWorkspace";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import StagesGrid from "../components/StagesGrid";
import ProjectCoverImage from "../components/ProjectCoverImage";

export default function ProjectWorkspace() {
  const { id } = useParams();
  const { project, loading, error } = useProjectWorkspace(id);

  // console.log(project);

  const location = useLocation();
  const protectedMode = location.state?.protectedMode;
  // console.log(protectedMode);

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
      <ProjectSummaryCard project={project} protectedMode={protectedMode} />
      <br />
      <ProjectStats project={project} />
      <StagesGrid
        project={project}
        stages={project.project_stages}
        protectedMode={protectedMode}
      />
    </Box>
  );
}
