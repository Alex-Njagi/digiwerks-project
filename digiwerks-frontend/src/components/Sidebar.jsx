import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  VStack,
  Button
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />

      <DrawerContent bgColor="brand.pastelPink">
        <DrawerHeader borderBottomWidth="1px" textAlign="center">
          DigiWerks
        </DrawerHeader>

        <DrawerBody>
          <VStack align="stretch" spacing={4} mt={4}>

            <Button variant="ghost" onClick={() => go("/browse")}>
              Browse
            </Button>

            <Button variant="ghost" onClick={() => go("/create")}>
              Create
            </Button>

            <Button variant="ghost" onClick={() => go("/dashboard")}>
              Profile
            </Button>

            <Button variant="ghost" onClick={() => go("/about")}>
              About Us
            </Button>

            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              mt={6}
            >
              Logout
            </Button>

          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;