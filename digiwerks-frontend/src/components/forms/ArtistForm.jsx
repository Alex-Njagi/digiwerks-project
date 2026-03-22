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
import useUpdateArtist from "../../hooks/useUpdateArtist";
import useDeleteArtist from "../../hooks/useDeleteArtist";
import { useNavigate } from "react-router-dom";

export default function ArtistForm({ initialData, mode }) {
  const { signup, loading: signupLoading, error: signupError } = useSignupArtist();
  const { updateArtist, loading: updateLoading, error: updateError } = useUpdateArtist();
  const { deleteArtist, loading: deleteLoading, error: deleteError} = useDeleteArtist();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: initialData?.email || "",
    username: initialData?.username || "",
    password: initialData?.password || "",
    bio: initialData?.bio || "",
    profile_image_url: initialData?.profile_image_url || null, // start as null or existing base64
  });

  // Simple change handler: store file objects or values directly
  const handleChange = (field) => (e) => {
    if (field === "profile_image_url") {
      const file = e.target.files[0];
      setForm({ ...form, profile_image_url: file || null }); // keep the File object
    } else {
      setForm({ ...form, [field]: e.target.value });
    }
  };

  // Convert file to base64 only at submit
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      let payload = { artist: { ...form } };
      console.log(payload);
      

      // Only convert if it's a File
      if (form.profile_image_url instanceof File) {
        payload.artist.profile_image_url = await convertToBase64(form.profile_image_url);
      }

      if (mode === "edit") {
        await updateArtist(initialData._id, payload);
        alert("Your account has been successfully updated!");
        navigate("/artist/dashboard");
      } else {
        await signup(payload);
        alert(`Account successfully created! Welcome ${form.username}!`);
        navigate("/artist/login");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong! Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
      const confirmed = window.confirm(
          "Are you sure you want to delete your account? This cannot be undone."
      );
      if (!confirmed) return;
      try {
          await deleteArtist(initialData._id);
          alert("Your account has been deleted successfully!");
          navigate("/artist/login");
      } catch (error) {
          console.error(error);
          alert("Oops! Something went wrong! Failed to delete account.");
      }
    };

  return (
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

          <FormLabel fontSize="xs" mb={-2} color="brand.blue">
            Profile Picture
          </FormLabel>
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
              isLoading={submitting || signupLoading || updateLoading}
              loadingText="Submitting..."
            >
              {mode === "edit" ? "Save Changes" : "Sign Up"}
            </Button>

            {mode === "edit" && (
              <Button
                marginLeft={5}
                size="sm"
                bg="red.400"
                color="white"
                _hover={{ bg: "red.500" }}
                onClick={handleDelete}
                isLoading={deleteLoading}
                loadingText="Deleting..."
              >
                Delete Account
              </Button>
            )}
          </Flex>

          {(signupError || updateError || deleteError) && (
            <Text color="red.500" fontSize="sm">
              {signupError?.message || updateError?.message || deleteError?.message}
            </Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}