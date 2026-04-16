import {
  Link,
  HStack,
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Box p={6} w="100%" minH="calc(100vh - 64px)" mx="auto" mt={8} m={0}>
        <VStack spacing={4} align="stretch">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1"
            p={15}
          >
            <Image
              src="https://res.cloudinary.com/dctir0tjg/image/upload/q_auto/f_auto/v1775146271/DigiWerks_Logo_kig5ve.png"
              alt="DigiWerks Logo"
              maxW="900px"
              w="100%"
              objectFit="contain"
            />
          </Box>

          <Heading textAlign="center" color="brand.blue" fontStyle="italic">
            "A CREATIVE WORKFLOW ANALYSIS AND ORGANISATION TOOL"
          </Heading>

          <HStack justify="center" spacing={20} mt={4}>
            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => navigate("/artist/signup")}
            >
              Signup Here
            </Button>
            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={() => navigate("/artist/login")}
            >
              Login Here
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
