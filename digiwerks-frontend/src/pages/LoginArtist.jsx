import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginArtist() {
  const navigate = useNavigate();

  return (
    <>
      <Heading size="lg" mb={2} color="brand.pink" justifySelf="center" p={7}>
        Welcome back! Login now
      </Heading>

      <Flex justify="center" align="center" h="50vh">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          border="4px solid"
          borderColor="brand.blue"
          boxShadow="2xl"
          w="400px"
        >
          <Text mb={4} fontWeight="bold" textAlign="left">
            Artist Account Login
          </Text>

          <VStack spacing={4}>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />

            <Flex w="100%" justify="flex-end">
              <Button
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={() => navigate("/artist_dashboard")}
              >
                Login
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default LoginArtist;