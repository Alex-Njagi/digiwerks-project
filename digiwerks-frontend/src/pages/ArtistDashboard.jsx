import { Box } from "@chakra-ui/react";
import ArtistProfileCard from "../components/ArtistProfileCard";
import ArtistStats from "../components/ArtistStats";
import ProjectGrid from "../components/ProjectGrid";

export default function ArtistDashboard() {
  return (
    <Box p={6}>
      <ArtistProfileCard />
      <ArtistStats
        projects={5}
        assets={10}
        versions={15}
      />
      <ProjectGrid />
    </Box>
  );
}