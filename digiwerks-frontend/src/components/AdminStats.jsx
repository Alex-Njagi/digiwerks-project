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

export default function AdminStats({project_count, artist_count}) {
    return (
        <Flex
        maxW="900px"
        mx="auto"
        mt={6}
        align="center"
        justify="center"
        gap={4}
        >
        <StatItem number={artist_count} label="Total Artists" />

        <Divider orientation="vertical" height="40px" borderColor="brand.blue" />

        <StatItem number={project_count} label="Total Projects" />

        </Flex>
    );
}