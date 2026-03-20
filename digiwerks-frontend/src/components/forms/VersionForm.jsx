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

export default function VersionForm ({initialData, mode}) {
    const [form, setForm] = useState({
        project_asset: initialData?.asset_name || "",
        version_number: initialData?.version_number || "",
        change_notes: initialData?.change_notes || "",
        file_url: initialData?.file_url || ""
    });
    
    const handleChange = (field) => (e) => {
    if (field === "file_url") {
        setForm({ ...form, file_url: e.target.files[0] });
    } else {
        setForm({ ...form, [field]: e.target.value });
    }
    };
    
    // const handleSubmit = () => {
    // onSubmit(form);
    // };

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
                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Asset</FormLabel>
                <Input
                required
                placeholder="Asset"
                value={form.project_asset}
                onChange={handleChange("project_asset")}
                />

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

            </Flex>
        </Box>
        </Flex>
        </>
    )
}