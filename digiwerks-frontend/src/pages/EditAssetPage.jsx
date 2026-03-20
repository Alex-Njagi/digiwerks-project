import { Heading } from "@chakra-ui/react";
import AssetForm from "../components/forms/AssetForm";

export default function EditAsset() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Update your Asset Today!
    </Heading>

    <AssetForm 
      mode = "edit"
      initialData={null}
    />
    </>
  )
}