import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginArtist() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justify="center" align="center" minH="80vh">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          border="4px solid"
          borderColor="brandBlue"
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
                bg="brandPink"
                color="white"
                _hover={{ bg: "brandBlue" }}
                onClick={() => navigate("/signup_artist")}
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