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
import useCreateProjectStage from "../../hooks/useCreateStage";
import useUpdateStage from "../../hooks/useUpdateStage";
import { useNavigate } from "react-router-dom";

export default function StageForm ({project, initialData, mode}) {
    const projectId = project._id
    const navigate = useNavigate()

    const { createStage, loading: createLoading, error: createError } = useCreateProjectStage();
    const { updateStage, loading: updateLoading, error: updateError } = useUpdateStage();
    const [submitting, setSubmitting] = useState(false);
    
    const [form, setForm] = useState({
        stage_name: initialData?.stage_name || "",
        stage_order: initialData?.stage_order || "",
        project_id: initialData?.project_id || projectId,
        description: initialData?.description || ""
    });
    
    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });        
    };

    const handleSubmit = async () => {
        try {
            setSubmitting(true);

            let payload = { ...form };
            
            if (mode === "edit") {
                await updateStage(initialData._id, payload);
                alert("Congratulations! Your stage has a new look!");
                navigate(`/projects/${projectId}`)
            } else {
                await createStage(projectId, payload);
                alert("Your project officially has a new stage!");
                navigate(`/projects/${projectId}`)
            }            
        } catch (error) {
            console.error(error);
            alert(`Oops! Something went wrong! Please try again.`)
        } finally {
            setSubmitting(false);
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
                Enter Project Stage Details
            </Text>

            <VStack spacing={4} align="stretch">                   
                {/* <FormLabel fontSize="xs" mb={-2} color="brand.blue">Project</FormLabel>
                <Input
                required
                placeholder="Project"
                value={form.project}
                onChange={handleChange("project")}
                /> */}

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Stage Name</FormLabel>
                <Input
                required
                placeholder="Stage Name"
                value={form.stage_name}
                onChange={handleChange("stage_name")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Stage Order</FormLabel>
                <Input
                required
                placeholder="Stage Order"
                value={form.stage_order}
                onChange={handleChange("stage_order")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Description</FormLabel>
                <Textarea
                required
                placeholder="Description"
                value={form.description}
                onChange={handleChange("description")}
                />
            </VStack>            
    
            <Flex justify="flex-end" pt={2}>        
                <Button
                size="sm"
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={handleSubmit}
                isLoading={submitting || createLoading || updateLoading}
                loadingText="Submitting..."
                >
                {mode === "edit" ? "Save Changes" : "Submit"}
                </Button>
            </Flex>         
            {(createError || updateError) && (
                <Text color="red.500" fontSize="sm">
                {createError?.message || updateError?.message}
                </Text>
            )}  
        </Box>
        </Flex>
        </>
    )
}