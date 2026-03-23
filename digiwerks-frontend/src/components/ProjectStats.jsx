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

export default function ProjectStats({project}) {
  // console.log(project);
  const stage_count = project.project_stages.length
  const asset_count = project.project_stages.flatMap(s => s.assets).length
  const version_count = project.project_stages.flatMap(s => s.assets).flatMap(a => a.asset_versions).length

  return (
    <Flex
      maxW="900px"
      mx="auto"
      mt={6}
      align="center"
      justify="center"
      gap={4}
    >
      <StatItem number={stage_count} label="Stages" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={asset_count} label="Assets" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={version_count} label="Asset Versions" />
    </Flex>
  );
}