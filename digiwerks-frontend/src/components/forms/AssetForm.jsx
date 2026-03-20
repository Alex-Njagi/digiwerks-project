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

export default function AssetForm ({initialData, mode}) {
    const [form, setForm] = useState({
        project_stage: initialData?.project_stage || "",
        asset_name: initialData?.asset_name || "",
        asset_tag: initialData?.asset_tag || "",
        asset_description: initialData?.stage_order || ""
    });

    const tags = [
        {tag_id: 1, tag_name: "Sketch"},
        {tag_id: 2, tag_name: "Illustration"},
        {tag_id: 3, tag_name: "Line Art"},
        {tag_id: 4, tag_name: "Digital Painting"},
        {tag_id: 5, tag_name: "Graphic Design"},
    ]

    
    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };
    
    // const handleSubmit = () => {
    // onSubmit(form);
    // };

    return (
        <>
        <Flex justify="center" align="center" h="80vh">
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
                Enter Asset Details
            </Text>

            <VStack spacing={4} align="stretch">                   
                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Project Stage</FormLabel>
                <Input
                required
                placeholder="Stage"
                value={form.project_stage}
                onChange={handleChange("stage")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Asset Name</FormLabel>
                <Input
                required
                placeholder="Asset Name"
                value={form.asset_name}
                onChange={handleChange("asset_name")}
                />

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Asset Tag</FormLabel>                  
                <Input
                required
                placeholder="Asset Tag"
                value={form.asset_tag}
                onChange={handleChange("asset_tag")}
                />

                <HStack justify="center">
                {tags.map((tag) => (
                    <Tag
                        key={tag.id}
                        alignSelf="flex-end"
                        bg="brand.pink"
                        color="white"
                        // onClick = {form.status = "In-Progress"}
                        _hover={{ bg: "brand.blue", cursor: "pointer" }}
                    >{tag.tag_name}</Tag>
                    
                ))}
                </HStack>

                <FormLabel fontSize="xs" mb={-2} color="brand.blue">Asset Description</FormLabel>
                <Textarea
                required
                placeholder="Asset Description"
                value={form.asset_description}
                onChange={handleChange("asset_description")}
                />            
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
            </Flex>

            {mode === "edit" ? 
                    <Button
                        marginLeft={5}
                        size="sm"
                        bg="red.400"
                        color="white"
                        _hover={{ bg: "red.500" }}
                        >
                        Delete Asset
                    </Button>
            : null }
        </Box>
        </Flex>
        </>
    )
}