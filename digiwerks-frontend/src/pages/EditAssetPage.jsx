import { Heading } from "@chakra-ui/react";
import AssetForm from "../components/forms/AssetForm";
import { useLocation } from "react-router-dom";

export default function EditAsset() {
  const location = useLocation();
  const asset = location.state?.asset;
  // console.log(asset);

  return (
    <>
      <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={5}>
        Update your Asset Today!
      </Heading>

      <AssetForm mode="edit" initialData={asset} />
    </>
  );
}
