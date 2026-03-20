import { Heading } from "@chakra-ui/react";
import VersionForm from "../components/forms/VersionForm";

export default function CreateVersion() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Show Off your Latest Version Today!
    </Heading>

    <VersionForm 
      mode = "create"
      initialData={null}
    />
    </>
  )
}