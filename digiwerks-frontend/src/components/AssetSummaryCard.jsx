import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Tag
} from "@chakra-ui/react";

export default function AssetSummaryCard({asset}) {
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
          {asset.asset_name}
        </Heading>

        {/* Description + Status */}
        <VStack spacing={2}>
          <Text textAlign="center" color="gray.600">
            {asset.asset_description}
          </Text>

          <Tag
            alignSelf="flex-center"
            bg="brand.blue"
            color="white"
            margin="2px"
            >
              {asset.tag}
          </Tag>
        </VStack>

        {/* Ownership */}
        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold">Owner: </Text>
            <Text>{asset.owner}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold">Project: </Text>
            <Text>{asset.project}</Text>
          </HStack>
        </HStack>

        {/* Edit Button */}
        <Flex justify="center" mt={4}>
          <Button
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
          >
            Edit Asset
          </Button>
        </Flex>

      </VStack>
    </Box>
  );
}