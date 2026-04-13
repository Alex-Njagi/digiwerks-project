import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({project, protectedMode}) {
  const navigate = useNavigate();
  // console.log(protectedMode);

  // console.log(project);
  
  const handleClick = () => {
    navigate(`/projects/${project._id}`, { state: {protectedMode: protectedMode} })
  };
  
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      border="3px solid"
      borderColor="brand.pink"
      bg="white"
      boxShadow="md"
      cursor="pointer"
      transition="0.2s"
      _hover={{
        transform: "scale(1.03)",
        borderColor: "brand.blue",
        boxShadow: "lg"
      }}
      onClick={handleClick}
    >

      <Image
        src={project.cover_img}
        alt={project.title}
        w="100%"
        aspectRatio="1 / 1"
        objectFit="cover" />

      <Box p={3}>
        <Text fontWeight="bold">{project.title}</Text>
        <HStack justify="left">
          <Text fontSize="sm" fontWeight="bold">By: </Text>
          <Text fontSize="sm">{project?.artist?.username}</Text>
        </HStack>
      </Box>
    </Box>
  );
}