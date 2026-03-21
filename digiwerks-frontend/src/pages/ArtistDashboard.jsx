import { Box } from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";

import { useCurrentArtist } from "../hooks/useCurrentArtist";


export default function ArtistDashboard() {
    const projects = [
        { id: 1, title: "Concept Art", thumbnail: "https://placehold.co/400x400"},
        { id: 2, title: "Character Design", thumbnail: "https://placehold.co/400x400"},
        { id: 3, title: "Fantasy World", thumbnail: "https://placehold.co/400x400"},
        { id: 4, title: "Sci-Fi Assets", thumbnail: "https://placehold.co/400x400"}
    ];

    const { artist, loading, error } = useCurrentArtist();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Please log in</p>;

    return (
    <Box p={6}>
        <ArtistProfileCard artist={artist}/>
        <ArtistStats />
        <ProjectGrid projects={projects} />
    </Box>
    );
}