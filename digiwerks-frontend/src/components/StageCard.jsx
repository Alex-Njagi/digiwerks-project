import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";

function StageCard({
  order = 1,
  name = "Concept Sketch",
  description = "Initial sketches and ideation",
  date = "March 12 2025",
  assets = []
}) {
  return (
    <Flex align="flex-start" gap={4} position="relative">

      {/* Diamond marker */}
      <Box
        w="14px"
        h="14px"
        bg="brand.blue"
        transform="rotate(45deg)"
        mt="8px"
        position="relative"
        zIndex="2"
        />
        
      {/* Stage content */}
      <Box
        flex="1"
        bg="white"
        borderRadius="lg"
        border="3px solid"
        borderColor="brand.blue"
        p={5}
        boxShadow="md"
      >
        <VStack align="stretch" spacing={3}>

          {/* Date */}
          <Text fontSize="sm" color="gray.500">
            Date: {date}
          </Text>

          {/* Name + Description */}
          <Text fontWeight="bold">
            {name} — {description}
          </Text>

          {/* Asset previews */}
          <SimpleGrid minChildWidth="120px" spacing={3}>
            {assets.map((asset) => (
              <Box
                key={asset.id}
                bg="gray.200"
                borderRadius="md"
                h="70px"
              />
            ))}
          </SimpleGrid>

          {/* Buttons */}
          <Flex justify="space-between" mt={2}>
            <Button
              size="sm"
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
            >
              Edit Stage
            </Button>

            <Button
              size="sm"
              bg="red.400"
              color="white"
              _hover={{ bg: "red.500" }}
            >
              Delete Stage
            </Button>
          </Flex>

        </VStack>
      </Box>
    </Flex>
  );
}

export default StageCard;