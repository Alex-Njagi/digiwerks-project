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
import { useCreateAsset } from "../../hooks/useAssetHooks";
import { useNavigate } from "react-router-dom";

export default function AssetForm ({projectId, stage, initialData, mode}) {
    const stageId = stage._id
    const navigate = useNavigate()

    const { submitAsset, loading: createLoading, error: createError } = useCreateAsset();
    const [submitting, setSubmitting] = useState(false);

    const [form, setForm] = useState({
        asset_name: initialData?.asset_name || "",
        asset_tag: initialData?.asset_tag || "",
        project_stage_id: initialData?.project_stage_id || stageId,
        asset_description: initialData?.stage_order || ""
    });

    const tags = [
        {tag_id: 1, tag_name: "Sketch"},
        {tag_id: 2, tag_name: "Illustration"},
        {tag_id: 3, tag_name: "Line-Art"},
        {tag_id: 4, tag_name: "Digital-Painting"},
        {tag_id: 5, tag_name: "Graphic-Design"},
    ]

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });        
    };

    const setField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };
    
    const handleSubmit = async () => {
        try {
            setSubmitting(true);

            let payload = { ...form };
            console.log(payload);            
                await submitAsset(stageId, payload);
                alert("Say hello to your new asset!");
                navigate(`/projects/${projectId}`)
        } catch (error) {
            console.error(error);
            alert(`Oops! Something went wrong! Please try again.`)
        } finally {
            setSubmitting(false);
        }
    };    

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
                    key={tag.tag_id}
                    bg={form.asset_tag === tag.tag_name ? "brand.blue" : "brand.pink"}
                    color="white"
                    cursor="pointer"
                    onClick={() => {
                    const isSelected = form.asset_tag === tag.tag_name;
                    setField("asset_tag", isSelected ? "" : tag.tag_name);
                    }}
                    _hover={{ opacity: 0.85 }}
                >
                    {tag.tag_name}
                </Tag>
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
                onClick={handleSubmit}
                isLoading={submitting || createLoading}
                loadingText="Submitting..."
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
            {(createError) && (
                <Text color="red.500" fontSize="sm">
                {createError?.message}
                </Text>
            )}
        </Box>
        </Flex>
        </>
    )
}