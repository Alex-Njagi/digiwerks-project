import { Heading } from "@chakra-ui/react";
import VersionForm from "../components/forms/VersionForm";
import { useLocation } from "react-router-dom";

export default function CreateVersion() {
  const location = useLocation();
  const asset = location.state?.asset;

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Show Off your Latest Version Today!
    </Heading>

    <VersionForm 
      mode = "create"
      asset={asset}
      initialData={null}
    />
    </>
  )
}