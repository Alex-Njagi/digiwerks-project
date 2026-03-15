import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack
} from "@chakra-ui/react";

function ProjectSummaryCard({
  title = "Project Title",
  description = "This project contains artwork assets and versions for a larger creative pipeline.",
  status = "Active",
  startDate = "Jan 2025",
  endDate = "Dec 2025"
}) {
  return (
    <Box
      bg="white"
      border="4px solid"
      borderColor="brand.blue"
      borderRadius="xl"
      boxShadow="lg"
      p={8}
      maxW="900px"
      mx="auto"
      mt={6}
    >
      <VStack spacing={4} align="stretch">

        {/* Project Title */}
        <Heading textAlign="center">
          {title}
        </Heading>

        {/* Description + Status */}
        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {description}
          </Text>

          <Text fontWeight="bold">
            Status: {status}
          </Text>
        </VStack>

        {/* Dates */}
        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold">Start Date: </Text>
            <Text>{startDate}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold">End Date: </Text>
            <Text>{endDate}</Text>
          </HStack>
        </HStack>

        {/* Edit Button */}
        <Flex justify="flex-end" mt={4}>
          <Button
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
          >
            Edit Project
          </Button>
        </Flex>

      </VStack>
    </Box>
  );
}

export default ProjectSummaryCard;