import { Heading } from "@chakra-ui/react";
import ProjectForm from "../components/forms/ProjectForm";
import { useLocation } from "react-router-dom";

export default function EditProject() {
  const location = useLocation();
  const project = location.state?.project;

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Update Your Project Today!
    </Heading>

    <ProjectForm 
      mode = "edit"
      initialData={project}
    />
    </>
  )
}