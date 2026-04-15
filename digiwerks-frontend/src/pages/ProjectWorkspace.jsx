import {
  Box,
  Button,
  Center,
  Image,
  Spinner,
  Text,
  Collapse,
  Flex,
  SimpleGrid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useProjectWorkspace } from "../hooks/useProjectWorkspace";
import ProjectSummaryCard from "../components/ProjectSummaryCard";
import ProjectStats from "../components/ProjectStats";
import StagesGrid from "../components/StagesGrid";
import AssetTagPieChart from "../components/charts/AssetTagPieChart";
import AssetCountBarChart from "../components/charts/AssetCountBarChart";

export default function ProjectWorkspace() {
  const { id } = useParams();
  const { project, loading, error } = useProjectWorkspace(id);

  const allStages = project?.project_stages
    .slice()
    .sort((a, b) => a.stage_order - b.stage_order);

  // console.log(allStages);

  const allAssets = project?.project_stages?.flatMap(
    (stage) => stage.assets || [],
  );

  const location = useLocation();
  const protectedMode = location.state?.protectedMode;
  // console.log(protectedMode);

  const [showStats, setShowStats] = useState(false);

  if (loading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" thickness="4px" color="brand.pink" />
        <Text>Loading project...</Text>
      </Center>
    );
  }

  if (error)
    return (
      <Box
        bg="white"
        border="4px solid"
        borderColor="brand.pink"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
        maxW="900px"
        mx="auto"
        mt={6}
      >
        <VStack spacing={4} align="stretch">
          <Heading textAlign="center" color="brand.blue">
            OOPS!
          </Heading>
          <Text textAlign="center" color="brand.pink" size="md">
            Sorry! {error}!
          </Text>
        </VStack>
      </Box>
    );

  return (
    <Box p={6}>
      <ProjectSummaryCard project={project} protectedMode={protectedMode} />
      <ProjectStats project={project} />
      <br />

      <Box mt={4} maxW="900px" mx="auto">
        <Flex justifySelf="center">
          <Button
            onClick={() => setShowStats(!showStats)}
            bg="brand.blue"
            color="white"
            _hover={{ bg: "brand.pink" }}
            variant="outline"
            mb={4}
          >
            {showStats ? "Hide Project Analytics" : "Show Project Analytics"}
          </Button>
        </Flex>
        <Collapse in={showStats} animateOpacity>
          <SimpleGrid minChildWidth="250px" spacing={6}>
            <AssetCountBarChart stages={allStages} />
            <AssetTagPieChart assets={allAssets} />
          </SimpleGrid>
        </Collapse>
      </Box>
      <StagesGrid
        project={project}
        stages={project.project_stages}
        protectedMode={protectedMode}
      />
    </Box>
  );
}
