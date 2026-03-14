import { Flex, Box, Button, Icon } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ isLoggedIn = false }) {
  return (
    <Flex
      bg="brandPink"
      w="100%"
      p={5}
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      zIndex="1000"
      borderColor="white"
    >
      <Box />

      {/* Logo placeholder */}
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        fontWeight="bold"
        color="white"
      >
        DigiWerks
      </Box>

      <Flex align="center" gap={3}>
        {isLoggedIn && (
          <>
            <Icon as={FaUserCircle} boxSize={6} color="white" />
            <Button size="sm" bg="white">
              Logout
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;