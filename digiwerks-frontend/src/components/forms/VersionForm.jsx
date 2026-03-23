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
import { useCreateVersion } from "../../hooks/useVersionHooks";
import { useNavigate } from "react-router-dom";

export default function VersionForm ({asset, initialData, mode}) {    
    const { submitVersion, loading: createLoading, error: createError } = useCreateVersion()
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const assetId = asset._id
    
    const [form, setForm] = useState({
        version_number: initialData?.version_number || 0,
        change_notes: initialData?.change_notes || "",
        asset_id: initialData?.asset_id || assetId,
        file_url: initialData?.file_url || ""
    });

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    };   
    
    const handleChange = (field) => (e) => {
        if (field === "file_url") {
            const file = e.target.files[0];
            setForm({ ...form, file_url: file || null }); // keep the File object
        } else {
            setForm({ ...form, [field]: e.target.value });
        }
    };
    
    const handleSubmit = async () => {
        try {
            setSubmitting(true);
            let payload = { ...form };
            console.log(payload);
            
            if (form.file_url instanceof File) {
            payload.file_url = await convertToBase64(form.file_url);
            }
            await submitVersion(assetId, payload);
            alert("Congrats! Your version is ready for all to see!");
            navigate(`/project_assets/${assetId}`)
        } catch (error) {
            console.error(error);
            alert(`Oops! Something went wrong! Please try again.`)
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
        <Flex justify="center" align="center" h="75vh">
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
                Provide Version Details
            </Text>

            <VStack spacing={4} align="stretch">
                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Version Number</FormLabel>
                <Input
                required
                placeholder="Version Number"
                value={form.version_number}
                onChange={handleChange("version_number")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Change Notes</FormLabel>
                <Textarea
                required
                placeholder="Change Notes"
                value={form.change_notes}
                onChange={handleChange("change_notes")}
                />

                {mode === "create" ?
                 <HStack>
                <FormLabel fontSize="xs" color="brand.blue" mb={-2}>Version Image</FormLabel>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleChange("file_url")}
                />
                </HStack> 
                : null }
                               
            </VStack>            
    
            <Flex justify="flex-end" pt={2}>        
                <Button
                size="sm"
                bg="brand.pink"
                color="white"
                _hover={{ bg: "brand.blue" }}
                onClick={handleSubmit}
                isLoading={submitting || createLoading}
                loadingText="Submitting..."
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
                        Delete Version
                    </Button>
                : null }

                {(createError) && (
                <Text color="red.500" fontSize="sm">
                    {createError?.message}
                </Text>
                )}
            </Flex>
            
        </Box>
        </Flex>
        </>
    )
}