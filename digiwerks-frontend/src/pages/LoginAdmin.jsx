import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  Heading,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginAdmin } from "../hooks/useAdminHooks";

export default function LoginAdmin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    

    const { login, loading, error } = useLoginAdmin();

    const handleSubmit = async () => {
    try {
        const data = await login(email, password);
        console.log("Logged in:", data.admin);
        alert(`Login successful! Welcome back!`)
        navigate("/admin/dashboard")
    } catch (err) {
        console.error(err);
        alert(`Oops! Something went wrong!`)
    }
    };

    return (
    <>
        <Heading size="lg" mb={2} color="brand.pink" justifySelf="center" p={7}>
        Welcome back! Login now
        </Heading>

        <Flex justify="center" align="center" h="50vh">
        <Box
            bg="white"
            p={8}
            borderRadius="xl"
            border="4px solid"
            borderColor="brand.blue"
            boxShadow="2xl"
            w="400px"
        >
            <Text mb={4} fontWeight="bold" textAlign="left">
            Admin Account Login
            </Text>

            <VStack spacing={4}>
            <Input 
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
            placeholder="Password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <Flex w="100%" justify="flex-end">
                <Button
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={handleSubmit} 
                isLoading={loading}
                >
                Login
                </Button>
            </Flex>
            {error && <Text color="red.500">{error}</Text>}
            </VStack>
        </Box>
        </Flex>
    </>
  );
}