import {
  Box,
  Spinner,
  Center,
  Text,
  Flex,
  SimpleGrid,
  Button,
  Collapse,
  Heading,
  VStack,
} from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";
import StagesBarChart from "../components/charts/StagesBarChart";
import StatusPieChart from "../components/charts/StatusPieChart";
import { useCurrentArtist } from "../hooks/useCurrentArtist";
import { useOwnedProjects } from "../hooks/useOwnedProjects";
import { useArtistStats } from "../hooks/useArtistStats";
import { useState } from "react";

export default function ArtistDashboard() {
  const {
    artist,
    loading: artistLoading,
    error: artistError,
  } = useCurrentArtist();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useOwnedProjects();
  const { stats, loading: statsLoading, error: statsError } = useArtistStats();
  const [showStats, setShowStats] = useState(false);

  const protectedMode = false;
  // console.log(protectedMode);

  if (artistLoading || projectsLoading || statsLoading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" thickness="4px" color="brand.pink" />
        <Text>Loading dashboard...</Text>
      </Center>
    );
  }

  if (artistError)
    return (
      <Box
        bg="white"
        border="4px solid"
        borderColor="red.400"
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
            Sorry! This is restricted to artist login!
          </Text>
        </VStack>
      </Box>
    );

  if (projectsError || statsError)
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
            Sorry! {projectsError || statsError}!
          </Text>
        </VStack>
      </Box>
    );

  return (
    <Box p={6}>
      <ArtistProfileCard artist={artist} protectedMode={protectedMode} />
      <ArtistStats stats={stats} />
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
            {showStats ? "Hide Analytics" : "Show Analytics"}
          </Button>
        </Flex>
        <Collapse in={showStats} animateOpacity>
          <SimpleGrid minChildWidth="250px" spacing={6}>
            <StagesBarChart projects={projects} />
            <StatusPieChart projects={projects} />
          </SimpleGrid>
        </Collapse>
      </Box>
      <ProjectGrid projects={projects} protectedMode={protectedMode} />
    </Box>
  );
}
