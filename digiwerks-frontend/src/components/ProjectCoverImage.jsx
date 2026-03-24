import { Box, Image } from "@chakra-ui/react";

export default function ProjectCoverImage({ project }) {
  if (!project?.cover_img) return null;

  return (
    <Box
      w="100%"
      maxW="500px"
      h="500px"
      mx="auto"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      border="3px solid"
      borderColor="brand.pink"
    >
      <Image
        src={project.cover_img}
        alt={project.title}
        w="100%"
        h="100%"
        aspectRatio="1 / 1"
        objectFit="cover"
      />
    </Box>
  );
}