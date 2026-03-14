import { Box } from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";

export default function ArtistDashboard() {
    const projects = [
        { id: 1, title: "Concept Art", thumbnail: "https://placehold.co/400x400" },
        { id: 2, title: "Character Sheet", thumbnail: "https://placehold.co/400x400" },
        { id: 3, title: "Environment Study", thumbnail: "https://placehold.co/400x400" }
    ];
    return (
    <Box p={6}>
        <ArtistProfileCard />
        <ArtistStats
        projects={5}
        assets={10}
        versions={15}
        />
        <ProjectGrid projects={projects} />
    </Box>
    );
}