import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Tag,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AssetSummaryCard({asset}) {
  const navigate = useNavigate();
  const projectTitle = asset.project_stage?.project?.title
  const artistName = asset.project_stage?.project?.artist?.username 
  const projectId = asset.project_stage?.project?._id  

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
              {asset.asset_tag}
          </Tag>
        </VStack>

        {/* Ownership */}
        <HStack justify="center" spacing={20} mt={4}>
          <HStack>
            <Text fontWeight="bold" color="brand.pink">Owner: </Text>
            <Text color="brand.blue">{artistName}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold" color="brand.pink">Project: </Text>
            <Link onClick={()=>navigate(`/projects/${projectId}`)} color="brand.blue">{projectTitle}</Link>
          </HStack>
        </HStack>

      </VStack>
    </Box>
  );
}