import {
  Box,
  Spinner,
  Center,
  Text,
  Flex,
  HStack,
  VStack,
  Divider,
  Heading,
  SimpleGrid,
  Button,
  Collapse,
} from "@chakra-ui/react";
import AdminProfileCard from "../components/AdminProfileCard";
import AdminStats from "../components/AdminStats";
import ArtistSignupChart from "../components/charts/ArtistSignupChart";
import ProjectCreationChart from "../components/charts/ProjectCreationChart";
import ArtistsTable from "../components/charts/ArtistsTable";

import { useCurrentAdmin } from "../hooks/useAdminHooks";
import { useAllProjects } from "../hooks/useAllProjects";
import { useAllArtists } from "../hooks/useAdminHooks";

import { useState } from "react";

export default function AdminDashboard() {
  const { admin, loading: adminLoading, error: adminError } = useCurrentAdmin();
  const {
    artists,
    loading: artistsLoading,
    error: artistsError,
  } = useAllArtists();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useAllProjects();

  const [showStats, setShowStats] = useState(false);

  const artist_count = artists.length;
  const project_count = projects.length;

  if (adminLoading || projectsLoading || artistsLoading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" thickness="4px" color="brand.pink" />
        <Text>Loading dashboard...</Text>
      </Center>
    );
  }

  if (adminError)
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
            Sorry! This is restricted to admin login!
          </Text>
        </VStack>
      </Box>
    );

  if (projectsError || artistsError)
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
            Sorry! {projectsError || artistsError}
          </Text>
        </VStack>
      </Box>
    );

  return (
    <Box p={6}>
      <AdminProfileCard admin={admin} />
      <AdminStats artist_count={artist_count} project_count={project_count} />
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
            <ArtistSignupChart artists={artists} />
            <ProjectCreationChart projects={projects} />
          </SimpleGrid>
        </Collapse>
      </Box>
      <br />
      <ArtistsTable artists={artists} />
    </Box>
  );
}
