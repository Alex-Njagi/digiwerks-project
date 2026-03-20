import { Heading } from "@chakra-ui/react";
import AssetForm from "../components/forms/AssetForm";

export default function CreateAsset() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Make a New Asset Today!
    </Heading>

    <AssetForm 
      mode = "create"
      initialData={null}
    />
    </>
  )
}