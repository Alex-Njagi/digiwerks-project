import { Heading } from "@chakra-ui/react";
import StageForm from "../components/forms/StageForm";
import { useLocation } from "react-router-dom";

export default function EditStage() {
  const location = useLocation();
  const stage = location.state?.stage;
  const project = location.state?.project;  
  // console.log(project);
  

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Modify Your Stage Today!
    </Heading>

    <StageForm 
      mode = "edit"
      project={project}
      initialData={stage}
    />
    </>
  )
}