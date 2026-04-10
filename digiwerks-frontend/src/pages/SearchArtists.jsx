import {
  Box,
  Heading,
  Text,
  Input,
  Divider,
  VStack,
  Center,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import ArtistGrid from "../components/ArtistGrid";
import { useGetAllArtists } from "../hooks/useGettingArtists";

export default function SearchArtists() {
  const [search, setSearch] = useState("");
  const { artists: allArtists , loading: allArtistsLoading, error: allArtistsError } = useGetAllArtists();
    
  if (allArtistsLoading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
          <Spinner size="xl" thickness="4px" color="brand.pink" />
          <Text>Loading artists...</Text>
      </Center>
    );
  }  
  if (allArtistsError) return <p>{allArtistsError}</p>;

  const filteredArtists = allArtists.filter(artist =>
    artist.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={8} maxW="1000px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading size="3xl" textAlign="center">
          Search for Artists
        </Heading>

        <Text color="gray.600">
          Find an artist you enjoy today!
        </Text>

        <Input
          placeholder="Search artists..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          borderColor="brand.blue"
        />
      </VStack>
      <ArtistGrid artists={filteredArtists} />
    </Box>
  );
}