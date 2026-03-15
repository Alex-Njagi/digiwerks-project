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

export default function ProjectStats({
  stages = 5,
  assets = 10,
  versions = 15
}) {
  return (
    <Flex
      maxW="900px"
      mx="auto"
      mt={6}
      align="center"
      justify="center"
      gap={4}
    >
      <StatItem number={stages} label="Stages" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={assets} label="Assets" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={versions} label="Asset Versions" />
    </Flex>
  );
}