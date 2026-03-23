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
  Image,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

export default function UpdateArtistForm({ initialData, mode, onSubmit }) {
  const [form, setForm] = useState({
    email: initialData?.email || "",
    username: initialData?.username || "",
    password: "",
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

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Flex justify="center" align="center" h="70vh">
      <Box
        bg="white"
        p={8}
        borderRadius="xl"
        border="4px solid"
        borderColor="brand.blue"
        boxShadow="2xl"
        w="600px"
      >
        <Text mb={4} fontWeight="bold" textAlign="left">
          Update Artist Account
        </Text>

        <VStack spacing={4} align="stretch">
          {/* Profile picture preview */}
          {form.profileImage && typeof form.profileImage === "object" && (
            <Image
              src={URL.createObjectURL(form.profileImage)}
              alt="Profile Preview"
              boxSize="100px"
              borderRadius="full"
              mb={2}
            />
          )}
          {form.profileImage && typeof form.profileImage === "string" && (
            <Image
              src={form.profileImage}
              alt="Profile Preview"
              boxSize="100px"
              borderRadius="full"
              mb={2}
            />
          )}

          <Input
            type="file"
            accept="image/*"
            onChange={handleChange("profileImage")}
          />

          <HStack>
            <Input
              required
              placeholder="Email"
              value={form.email}
              onChange={handleChange("email")}
            />
            <Input
              placeholder="Username"
              value={form.username}
              onChange={handleChange("username")}
            />
            <Input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={handleChange("password")}
            />
          </HStack>

          <Textarea
            placeholder="Bio"
            value={form.bio}
            onChange={handleChange("bio")}
          />

          <Flex justify="space-between" pt={2}>
            <Button colorScheme="red" variant="outline" onClick={onDelete}>
              Delete Account
            </Button>

            <Button
              bg="brand.pink"
              color="white"
              _hover={{ bg: "brand.blue" }}
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
}