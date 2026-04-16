import { Box, Flex, Button, Heading, Divider, VStack } from "@chakra-ui/react";
import StageCard from "./StageCard";
import { useNavigate } from "react-router-dom";

export default function StagesGrid({ project, stages, protectedMode }) {
  // console.log(projectId);

  const navigate = useNavigate();

  const sortedStages = stages.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );

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
      {protectedMode === true ? (
        <Flex justify="center" mb={3}>
          <Heading
            size="md"
            color="brand.pink"
            textAlign="center"
            justifySelf="center"
          >
            PROJECT STAGES
          </Heading>
        </Flex>
      ) : (
        <Flex align="center" justify="space-between" mb={3}>
          <Box w="40px" />
          <Heading
            size="md"
            color="brand.pink"
            textAlign="center"
            justifySelf="center"
          >
            PROJECT STAGES
          </Heading>
          <Button
            size="sm"
            bg="brand.pink"
            color="white"
            _hover={{ bg: "brand.blue" }}
            onClick={() =>
              navigate("/project_stage/create", { state: { project } })
            }
          >
            + New Stage
          </Button>
        </Flex>
      )}

      <Divider mb={6} borderColor="brand.blue" />
      <Box
        position="absolute"
        left="13px"
        top="90px"
        bottom="20px"
        width="2px"
        bg="brand.blue"
      />

      <VStack spacing={8} align="stretch">
        {sortedStages.map((stage) => (
          <StageCard
            key={stage._id}
            project={project}
            stage={stage}
            protectedMode={protectedMode}
          />
        ))}
      </VStack>
    </Box>
  );
}
