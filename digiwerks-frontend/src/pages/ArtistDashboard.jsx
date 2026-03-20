import { Box } from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";

export default function ArtistDashboard() {
    const artist = {
    email: "user@email.com",
    username: "user_name",
    password: "user@emA1l.com",
    bio: "Test User",
    profileImage: "https://placehold.co/400x400",
    projects: [
        { id: 1, title: "Concept Art", thumbnail: "https://placehold.co/400x400"},
        { id: 2, title: "Character Design", thumbnail: "https://placehold.co/400x400"},
        { id: 3, title: "Fantasy World", thumbnail: "https://placehold.co/400x400"},
        { id: 4, title: "Sci-Fi Assets", thumbnail: "https://placehold.co/400x400"}
    ]};

    return (
    <Box p={6}>
        <ArtistProfileCard artist={artist}/>
        <ArtistStats />
        <ProjectGrid projects={artist.projects} />
    </Box>
    );
}