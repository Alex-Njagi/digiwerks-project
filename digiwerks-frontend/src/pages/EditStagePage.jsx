import { Heading } from "@chakra-ui/react";
import StageForm from "../components/forms/StageForm";

export default function EditStage() {
  // Temporary mock data (API later)
  const stageData = {};

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
      Modify Your Stage Today!
    </Heading>

    <StageForm 
      mode = "edit"
      initialData={stageData}
    />
    </>
  )
}