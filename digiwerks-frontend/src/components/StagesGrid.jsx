import {
  Box,
  Flex,
  Button,
  Heading,
  Divider,
  VStack
} from "@chakra-ui/react";
import StageCard from "./StageCard";
import { useNavigate } from "react-router-dom";

export default function StagesGrid() {

  const stages = [
    {
      id: 1,
      name: "Concept",
      description: "Early idea sketches",
      date: "March 10 2025",
      assets: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
    {
      id: 2,
      name: "Line Art",
      description: "Refined outlines",
      date: "March 18 2025",
      assets: [{ id: 4 }, { id: 5 }]
    }
  ];

  const navigate = useNavigate()

  return (
    <Box
      mt={10}
      p={6}
      border="1px solid"
      borderColor="brand.pink"
      borderRadius="xl"
      bg="brand.pastelPink"
      position="relative"
    >

    <Flex align="center" justify="space-between" mb={3}>
      {/* Empty spacer so the title stays centered */}
        <Box w="40px" />

        <Heading size="md" color="brand.pink" textAlign="center">
            PROJECT STAGES
        </Heading>

        {/* Add Stage Button */}
        <Button
            size="sm"
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
            onClick={() => navigate("/project_stage/create")}
        >
            + New Stage
        </Button>
    </Flex>

      <Divider mb={6} borderColor="brand.blue" />

      {/* Timeline vertical line */}
      <Box
        position="absolute"
        left="13px"
        top="90px"
        bottom="20px"
        width="2px"
        bg="brand.blue"
      />

      <VStack spacing={8} align="stretch">
        {stages.map((stage, index) => (
          <StageCard
            key={stage.id}
            order={index + 1}
            name={stage.name}
            description={stage.description}
            date={stage.date}
            assets={stage.assets}
          />
        ))}
      </VStack>

    </Box>
  );
}