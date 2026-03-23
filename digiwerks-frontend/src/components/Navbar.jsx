import {
  Flex,
  Box,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="brand.pink"
        w="100%"
        p={4}
        align="center"
        justify="space-between"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        {/* Hamburger */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          color="brand.pastelPink"
          fontSize="24px"
          onClick={onOpen}
        />

        {/* Centered Logo */}
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          fontWeight="bold"
          color="white"
          fontSize="lg"
        >
          DigiWerks
        </Box>

        {/* Spacer to balance layout */}
        <Box w="40px" />
      </Flex>

      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;