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

export default function ArtistForm ({initialData, mode}) {
    const [form, setForm] = useState({
        email: initialData?.email || "",
        username: initialData?.username || "",
        password: initialData?.password || "",
        bio: initialData?.bio || "",
        profileImage: initialData?.profileImage || null
    });
    
    const handleChange = (field) => (e) => {
    if (field === "profileImage") {
        setForm({ ...form, profileImage: e.target.files[0] });
    } else {
        setForm({ ...form, [field]: e.target.value });
    }
    };
    
    // const handleSubmit = () => {
    // onSubmit(form);
    // };

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
                onChange={handleChange("profileImage")}
            />
    
            <Flex justify="flex-end" pt={2}>        
                <Button
                size="sm"
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
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
            </VStack>
        </Box>
      </Flex>
        </>
    )
}