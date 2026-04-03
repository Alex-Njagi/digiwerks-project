import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Tag,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLogoutAdmin } from "../hooks/useAdminHooks";

export default function AdminProfileCard({admin}) {
    const navigate = useNavigate();
    const { logout, loading } = useLogoutAdmin();

    const handleLogout = async () => {
        try {
        await logout();
        alert(`Logout successful! We hope to see you again!`)
        navigate("/admin/login");
        } catch (err) {
        console.error(err);
        alert(`Oops! Something went wrong!`)
        }
    };

    return (
    <Box
        bg="white"
        border="4px solid"
        borderColor="brand.pink"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
        maxW="900px"
        mx="auto"
        mt={6}
    >
        <VStack spacing={4} align="stretch">

        <Heading textAlign="center">
            Administrative Overview Page
        </Heading>

        {/* Description + Status */}
        <VStack spacing={2}>
            <Text textAlign="center" color="gray.600">
            Account and Project Management Dashboard
            </Text>

            <Tag
            alignSelf="flex-center"
            bg="brand.blue"
            color="white"
            margin="2px"
            >
                {admin.admin_role}
            </Tag>
        </VStack>

        {/* Ownership */}
        <HStack justify="center" spacing={20} mt={4}>
            <HStack>
            <Text fontWeight="bold" color="brand.pink">Name: </Text>
            <Text color="brand.blue">{admin.name}</Text>
            </HStack>

            <HStack>
            <Text fontWeight="bold" color="brand.pink">Email: </Text>
            <Text color="brand.blue">{admin.email}</Text>
            </HStack>
        </HStack>

        <Flex justify="flex-end" mt={6}>
        <Button
          bg="brand.blue"
          color="white"
          _hover={{ bg: "brand.pink" }}
          onClick={handleLogout} isLoading={loading}
        >
          Logout
        </Button>
      </Flex>

        </VStack>
    </Box>
    );
}