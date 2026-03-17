import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
  HStack,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignupArtist() {
  const navigate = useNavigate();

  return (
    <>

    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.pink" justifySelf="center" p={7}>
      Create Your Account Today!
    </Heading>

      <Flex justify="center" align="center" h="50vh">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          border="4px solid"
          borderColor="brand.blue"
          boxShadow="2xl"
          w="600px"
        >
          <Text mb={4} fontWeight="bold" textAlign="left">
            Account Details
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
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
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