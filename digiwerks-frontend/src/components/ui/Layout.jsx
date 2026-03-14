import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />


      <Box minH="calc(100vh - 64px)" p={6}>{children}</Box>
    </>
  );
}

export default Layout;