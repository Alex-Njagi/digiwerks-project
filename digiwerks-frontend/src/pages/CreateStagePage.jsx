import { Heading } from "@chakra-ui/react";
import StageForm from "../components/forms/StageForm";

export default function CreateStage() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Make a New Stage Today!
    </Heading>

    <StageForm 
      mode = "create"
      initialData={null}
    />
    </>
  )
}