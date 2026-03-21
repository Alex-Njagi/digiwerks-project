import { Box, Flex, Text, Divider } from "@chakra-ui/react";

function StatItem({ number, label }) {
  return (
    <Box flex="1" textAlign="center">
      <Text fontWeight="bold" fontSize="3xl" color="brand.pink">
        {number}
      </Text>
      <Text color="gray.600">{label}</Text>
    </Box>
  );
}

function ArtistStats({stats}) {
  return (
    <Flex
      maxW="900px"
      mx="auto"
      mt={6}
      align="center"
      justify="center"
      gap={4}
    >
      <StatItem number={stats.projects_count} label="Projects" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={stats.assets_count} label="Assets" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={stats.asset_versions_count} label="Asset Versions" />
    </Flex>
  );
}

export default ArtistStats;