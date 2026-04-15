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
import ProjectGrid from "../components/ProjectGrid";
import StagesBarChart from "../components/charts/StagesBarChart";
import StatusPieChart from "../components/charts/StatusPieChart";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOneArtist } from "../hooks/useGettingArtists";

export default function ViewArtist() {
  const { id } = useParams();
  const { artist, loading, error } = useGetOneArtist(id);
  const [showStats, setShowStats] = useState(false);

  const protectedMode = true;
  // console.log(protectedMode);
  const projects = artist?.projects;
  // console.log(projects);

  if (loading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" thickness="4px" color="brand.pink" />
        <Text>Loading account...</Text>
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
      <ArtistProfileCard artist={artist} protectedMode={protectedMode} />
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
