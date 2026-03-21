import { Box, Spinner, Center, Text } from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";

import { useCurrentArtist } from "../hooks/useCurrentArtist";
import { useOwnedProjects } from "../hooks/useOwnedProjects";
import { useArtistStats } from "../hooks/useArtistStats";


export default function ArtistDashboard() {
    const { artist, loading: artistLoading, error: artistError } = useCurrentArtist();
    const { projects, loading: projectsLoading, error: projectsError } = useOwnedProjects();
    const { stats, loading: statsLoading, error: statsError } = useArtistStats();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Please log in</p>;

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
        <ProjectGrid projects={projects} />
    </Box>
    );
}