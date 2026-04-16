import {
  Box,
  Heading,
  Divider,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import ArtistCard from "./ArtistCard";
import { useNavigate } from "react-router-dom";

export default function ArtistGrid({ artists = [] }) {
  const navigate = useNavigate();
  return (
    <Box mt={10} maxW="900px" mx="auto">
      <Flex align="center" justify="center" mb={3}>
        <Heading size="md" color="brand.pink" textAlign="center">
          ARTIST PROFILES
        </Heading>
      </Flex>

      <Divider mb={6} borderColor="brand.blue" />

      <SimpleGrid minChildWidth="250px" spacing={6}>
        {artists.map((artist) => (
          <ArtistCard key={artist._id} artist={artist} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
