import {
  Flex,
  Box,
  IconButton,
  useDisclosure,
  Image
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
        >
          <Image
            src="https://res.cloudinary.com/dctir0tjg/image/upload/q_auto/f_auto/v1775146271/DigiWerks_Logo_kig5ve.png"
            alt="DigiWerks Logo"
            maxW="150px"
            w="100%"
            objectFit="contain"
          />
        </Box>

        {/* Spacer to balance layout */}
        <Box w="40px" />
      </Flex>

      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;