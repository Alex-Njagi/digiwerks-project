import { Heading } from "@chakra-ui/react";
import VersionForm from "../components/forms/VersionForm";
import { useLocation } from "react-router-dom";

export default function EditVersion() {
  const location = useLocation();
  const version = location.state?.version;
  // console.log(version);
  return (
    <>
      <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={5}>
        Modify your Version Today!
      </Heading>

      <VersionForm mode="edit" initialData={version} />
    </>
  );
}
