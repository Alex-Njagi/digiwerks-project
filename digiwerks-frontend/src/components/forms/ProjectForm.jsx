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

export default function ProjectForm ({initialData, mode}) {

    const [form, setForm] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        cover_img: initialData?.cover_img || "",
        status: initialData?.status || "",
        start_date: initialData?.start_date || "",
        end_date: initialData?.end_date || null
    });
    
    const handleChange = (field) => (e) => {
    if (field === "cover_img") {
        setForm({ ...form, cover_img: e.target.files[0] });
    } else {
        setForm({ ...form, [field]: e.target.value });
    }
    };
    
    // const handleSubmit = () => {
    // onSubmit(form);
    // };

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
                    alignSelf="flex-end"
                    bg="brand.pink"
                    color="white"
                    // onClick = {form.status = "In-Progress"}
                    _hover={{ bg: "brand.blue", cursor: "pointer" }}
                >
                    In-Progress
                </Tag>
                <Tag
                    alignSelf="flex-start"
                    bg="brand.pink"
                    color="white"
                    // onClick = {form.status = "Complete"}
                    _hover={{ bg: "brand.blue", cursor: "pointer" }}
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
                        >
                        Delete Project
                    </Button>
                : null }

            </Flex>
        </Box>
        </Flex>
        </>
    )
}