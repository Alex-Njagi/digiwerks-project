import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
  HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignupArtist() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justify="center" align="center" h="90vh">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          border="4px solid"
          borderColor="brandBlue"
          boxShadow="2xl"
          w="600px"
        >
          <Text mb={4} fontWeight="bold" textAlign="left">
            Artist Account Creation
          </Text>

          <VStack spacing={4} align="stretch">
            <HStack>
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" type="password" />
            </HStack>

            <Textarea placeholder="Bio" />

            <Flex justify="flex-end">
              <Button
                bg="brandPink"
                color="white"
                _hover={{ bg: "brandBlue" }}
                onClick={() => navigate("/login_artist")}
              >
                Sign Up
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default SignupArtist;