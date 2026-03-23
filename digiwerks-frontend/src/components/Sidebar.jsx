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
import { useLogoutArtist } from "../hooks/useLogoutArtist";

function Sidebar({ isOpen, onClose }) {
  const { logout, loading } = useLogoutArtist();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // Optional: clear any frontend state like current artist
      alert(`Logout successful! We hope to see you again!`)
      navigate("/artist/login"); // redirect back to login page
    } catch (err) {
      console.error(err);
      alert(`Oops! Something went wrong!`)
    }
  };

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

            <Button variant="ghost" onClick={() => go("/browse_projects")}>
              Browse Projects
            </Button>

            <Button variant="ghost" onClick={() => go("/project/create")}>
              Create Project
            </Button>

            <Button variant="ghost" onClick={() => go("/artist/dashboard")}>
              View Profile
            </Button>

            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              mt={6}
              onClick={handleLogout} isLoading={loading}
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