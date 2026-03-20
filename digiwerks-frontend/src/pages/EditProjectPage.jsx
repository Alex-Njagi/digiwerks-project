import { Heading } from "@chakra-ui/react";
import ProjectForm from "../components/forms/ProjectForm";

export default function EditProject() {
  // Temporary mock data (API later)
  const projectData = {};

  const handleUpdate = (updatedData) => {
    console.log("Updated artist:", updatedData);
  };

  const handleDelete = () => {
    console.log("Delete account clicked");
  };

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Update Your Project Today!
    </Heading>

    <ProjectForm 
      mode = "edit"
      initialData={projectData}
    />
    </>
  )
}