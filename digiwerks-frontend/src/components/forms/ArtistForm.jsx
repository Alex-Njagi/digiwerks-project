import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormLabel
} from "@chakra-ui/react";
import { useSignupArtist } from "../../hooks/useSignupArtist";
import { useNavigate } from "react-router-dom";

export default function ArtistForm ({initialData, mode}) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: initialData?.email || "",
        username: initialData?.username || "",
        password: initialData?.password || "",
        bio: initialData?.bio || "",
        profile_image_url: initialData?.profile_image_url || ""
    });
    
    const handleChange = (field) => (e) => {
    if (field === "profileImage") {
        setForm({ ...form, profile_image_url: e.target.files[0] });
    } else {
        setForm({ ...form, [field]: e.target.value });
    }
    };

    const { signup, loading, error } = useSignupArtist();
    
    const handleSubmit = async () => {
        if (mode === "edit") {
            // we'll handle update later
            return;
        }

        const payload = {
            artist: {
            email: form.email,
            username: form.username,
            password: form.password,
            bio: form.bio,
            profile_image_url: form.profile_image_url
            // profile image handled separately if using multipart
            }
        };

        try {
            const data = await signup(payload);
            console.log("Artist created:", data);
            alert(`Account successfully created! Welcome ${form.username}!`)
            navigate("/artist/login")
            // TODO: redirect or auto-login
        } catch (err) {
            console.error(err);
            alert(`Oops! Something went wrong!`)
        }
    };

    return (
        <>
        <Flex justify="center" align="center" h="70vh">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          border="4px solid"
          borderColor="brand.pink"
          boxShadow="2xl"
          w="600px"
        >
            <Text mb={4} fontWeight="bold" textAlign="left">
                Enter Account Details
            </Text>

            <VStack spacing={4} align="stretch">                   
            <HStack>
                <VStack>
                <Input
                required
                placeholder="Email"
                value={form.email}
                onChange={handleChange("email")}
                />
                </VStack>
                <VStack>
                <Input
                required
                placeholder="Username"
                value={form.username}
                onChange={handleChange("username")}
                />
                </VStack>
                <VStack>
                <Input
                required
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={handleChange("password")}
                />
                </VStack>
            </HStack>
          
            <Textarea
                placeholder="Bio"
                value={form.bio}
                onChange={handleChange("bio")}
            />

            <FormLabel fontSize="xs" mb={-2} color="brand.blue">Profile Picture</FormLabel>
            <Input
                type="file"
                accept="image/*"
                onChange={handleChange("profile_image_url")}
            />
    
            <Flex justify="flex-end" pt={2}>        
                <Button
                size="sm"
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={handleSubmit}
                isLoading={loading}
                >
                {mode === "edit" ? "Save Changes" : "Sign Up"}
                </Button>

                {mode === "edit" ? 
                    <Button
                        marginLeft={5}
                        size="sm"
                        bg="red.400"
                        color="white"
                        _hover={{ bg: "red.500" }}
                        >
                        Delete Account
                    </Button>
                : null }
            </Flex>
            {error && (
                <Text color="red.500" fontSize="sm">
                {error}
                </Text>
            )}
            </VStack>
        </Box>
      </Flex>
        </>
    )
}