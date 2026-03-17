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

export default function AssetStats({asset}) {
  return (
    <Flex
      maxW="900px"
      mx="auto"
      mt={6}
      align="center"
      justify="center"
      gap={4}
    >
      <StatItem number={asset.versions} label="Asset Versions" />

      <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

      <StatItem number={asset.comments} label="Total Comments" />
    </Flex>
  );
}