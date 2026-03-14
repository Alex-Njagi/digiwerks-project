import { Box, Image, Text } from "@chakra-ui/react";

export default function ProjectCard({title = "Project Title",thumbnail = "https://placehold.co/400x400"}) {
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
    >

      <Image
        src={thumbnail}
        alt={title}
        w="100%"
        aspectRatio="1 / 1"
        objectFit="cover" />

      <Box p={3}>
        <Text fontWeight="bold">{title}</Text>
      </Box>
    </Box>
  );
}