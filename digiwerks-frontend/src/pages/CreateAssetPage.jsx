import { Heading } from "@chakra-ui/react";
import AssetForm from "../components/forms/AssetForm";
import { useLocation } from "react-router-dom";

export default function CreateAsset() {
  const location = useLocation();
  const stage = location.state?.stage;
  const project = location.state?.project;
  const projectId = project._id

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Make a New Asset Today!
    </Heading>

    <AssetForm 
      mode = "create"
      projectId={projectId}
      stage={stage}
      initialData={null}
    />
    </>
  )
}