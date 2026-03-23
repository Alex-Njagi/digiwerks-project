import { Heading } from "@chakra-ui/react";
import ProjectForm from "../components/forms/ProjectForm";

export default function CreateProject() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Create Your Project Today!
    </Heading>

    <ProjectForm 
      mode = "create"
      initialData={null}
    />
    </>
  )
}