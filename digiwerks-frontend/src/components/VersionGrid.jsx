import { Box, Heading, Divider, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import VersionCard from "./VersionCard";
import { useNavigate } from "react-router-dom";

export default function VersionGrid({ versions, onVersionClick }) {
  // console.log(versions);  
  const navigate = useNavigate()
  
  return (
    <Box mt={10} maxW="900px" mx="auto">

      <Flex align="center" justify="space-between" mb={3}>
        {/* Empty spacer so the title stays centered */}
          <Box w="40px" />
  
          <Heading size="md" color="brand.pink" textAlign="center">
              ASSET VERSIONS
          </Heading>
  
          {/* Add Stage Button */}
          <Button
              size="sm"
              bg="brand.pink"
              color="white"
              onClick={() => navigate("/version/create")}
              _hover={{ bg: "brand.blue" }}
          >
              + New Version
          </Button>
      </Flex>
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