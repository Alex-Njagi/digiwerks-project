import { 
    Box, Spinner, Center, Text, Flex, HStack, Divider, Heading, SimpleGrid, Button, Collapse 
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
import ProjectCard from "../components/ProjectCard";


export default function ArtistDashboard() {
    const { artist, loading: artistLoading, error: artistError } = useCurrentArtist();
    const { projects, loading: projectsLoading, error: projectsError } = useOwnedProjects();
    const { stats, loading: statsLoading, error: statsError } = useArtistStats();

    const [showStats, setShowStats] = useState(false);

    

    if (artistLoading || projectsLoading || statsLoading) {
        return (
            <Center h="50vh" flexDirection="column" gap={4}>
                <Spinner size="xl" thickness="4px" color="brand.pink" />
                <Text>Loading dashboard...</Text>
            </Center>
        );
    }

    if (artistError) return <p>Please log in</p>;
    if (projectsError) return <p>{projectsError}</p>;
    if (statsError) return <p>{statsError}</p>;

    return (
    <Box p={6}>
        <ArtistProfileCard artist={artist}/>
        <ArtistStats stats={stats}/>
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
        
        <ProjectGrid projects={projects} />
    </Box>
    );
}