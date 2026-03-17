import { Box, Heading, Divider, SimpleGrid } from "@chakra-ui/react";
import VersionCard from "./VersionCard";

export default function VersionGrid({ versions, onVersionClick }) {
  // console.log(versions);  
  
  return (
    <Box mt={10} maxW="900px" mx="auto">

      {/* Section Header */}
      <Heading size="md" mb={3} color="brand.pink" textAlign="center">
        ASSET VERSIONS
      </Heading>

      <Divider mb={6} borderColor="brand.blue" />

      {/* Responsive Grid */}
      <SimpleGrid minChildWidth="250px" spacing={6}>
        {versions.map((version) => (
          <VersionCard
            key = {version.version_number}
            version = {version}
            onClick={() => onVersionClick(version)}
          />
        ))}
      </SimpleGrid>

    </Box>
  );
}