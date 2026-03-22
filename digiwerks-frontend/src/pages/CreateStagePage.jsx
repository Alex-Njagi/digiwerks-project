import { Heading } from "@chakra-ui/react";
import StageForm from "../components/forms/StageForm";
import { useLocation } from "react-router-dom";

export default function CreateStage() {
  const location = useLocation();
  const project = location.state?.project;
  // console.log(project);
  
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Make a New Stage Today!
    </Heading>

    <StageForm 
      mode = "create"
      project={project}
      initialData={null}
    />
    </>
  )
}