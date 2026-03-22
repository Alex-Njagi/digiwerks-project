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
  FormLabel,
  Tag
} from "@chakra-ui/react";
import { useCreateProject } from "../../hooks/useCreateProject";
import useUpdateProject from "../../hooks/useUpdateProject";
import useDeleteProject from "../../hooks/useDeleteProject";
import { useNavigate } from "react-router-dom";


export default function ProjectForm ({initialData, mode}) {
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    };

    const setField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const { submitProject, loading, error, success } = useCreateProject();
    const { updateProject } = useUpdateProject();
    const { deleteProject } = useDeleteProject();
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        cover_img: initialData?.cover_img || "",
        status: initialData?.status || "",
        start_date: initialData?.start_date || "",
        end_date: initialData?.end_date || ""
    });    
    
    const handleChange = (field) => async (e) => {
        if (field === "cover_img") {
            const file = e.target.files[0];
            if (!file) return;

            const base64 = await convertToBase64(file);
            setForm({ ...form, cover_img: base64 });
        } else {
            setForm({ ...form, [field]: e.target.value });
        }
    };

    const handleSubmit = async () => {
        try {
            setSubmitting(true);

            let payload = { ...form };

            // 🖼️ Convert image if user uploaded one
            if (form.cover_img instanceof File) {
            payload.cover_img = await convertToBase64(form.cover_img);
            }
            
            if (mode === "edit") {
                await updateProject(initialData._id, payload);
                alert("Your project has been successfully updated!");
                console.log(success);
                navigate("/artist/dashboard") 
            } else {
                await submitProject(payload);
                alert("Your project has been successfully created!");
                console.log(success);
                navigate("/artist/dashboard")  
            }
            
        } catch (error) {
            console.error(error);
            alert(`Oops! Something went wrong! Please try again.`)
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this project? This cannot be undone."
        );

        if (!confirmed) return;

        try {
            await deleteProject(initialData._id);
            alert("Your project has been deleted successfully!");
            navigate("/artist/dashboard");
        } catch (error) {
            console.error(error);
            alert("❌ Failed to delete project.");
        }
    };

    return (
        <>
        <Flex justify="center" align="center" h="90vh">
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
                Enter Project Details
            </Text>

            <VStack spacing={4} align="stretch">                   
                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Title</FormLabel>
                <Input
                required
                placeholder="Title"
                value={form.title}
                onChange={handleChange("title")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Status</FormLabel>
                <Input
                required
                placeholder="Status"
                value={form.status}
                onChange={handleChange("status")}
                />

                <HStack justify="center">
                <Tag
                    bg={form.status === "In-Progress" ? "brand.blue" : "brand.pink"}
                    color="white"
                    cursor="pointer"
                    onClick={() => setField("status", "In-Progress")}
                    _hover={{ opacity: 0.85 }}
                >
                    In-Progress
                </Tag>

                <Tag
                    bg={form.status === "Complete" ? "brand.blue" : "brand.pink"}
                    color="white"
                    cursor="pointer"
                    onClick={() => setField("status", "Complete")}
                    _hover={{ opacity: 0.85 }}
                >
                    Complete
                </Tag>
                </HStack>

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Description</FormLabel>
                <Textarea
                required
                placeholder="Description"
                value={form.description}
                onChange={handleChange("description")}
                />

                <HStack>
                    <FormLabel fontSize="xs" mb={-2} color="brand.blue">Start Date</FormLabel>
                    <Input
                    required
                    placeholder="Start Date"
                    value={form.start_date}
                    onChange={handleChange("start_date")}
                    />
                    <FormLabel fontSize="xs" mb={-2} color="brand.blue">End Date</FormLabel>
                    <Input
                    required
                    placeholder="End Date"
                    value={form.end_date}
                    onChange={handleChange("end_date")}
                    />
                </HStack>

                <HStack>
                <FormLabel fontSize="xs" color="brand.blue" mb={-2}>Cover Picture</FormLabel>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleChange("cover_img")}
                />
                </HStack>
            </VStack>            
    
            <Flex justify="flex-end" pt={2}>        
                <Button
                size="sm"
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={handleSubmit}
                isLoading={loading}
                loadingText="Submitting"
                >
                {mode === "edit" ? "Save Changes" : "Submit"}
                </Button>

                {mode === "edit" ? 
                    <Button
                        marginLeft={5}
                        size="sm"
                        bg="red.400"
                        color="white"
                        _hover={{ bg: "red.500" }}
                        onClick={handleDelete}
                        >
                        Delete Project
                    </Button>
                : null }                
            </Flex>
            {error && (
                <Text color="red.500" fontSize="sm">
                {error}
                </Text>
            )}            
        </Box>
        </Flex>
        </>
    )
}