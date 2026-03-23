import { Heading } from "@chakra-ui/react";
import ArtistForm from "../components/forms/ArtistForm";

export default function SignupArtist() {
  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Create Your Account Today!
    </Heading>

    <ArtistForm 
      mode = "create"
      initialData={null}
    />
    </>
  )
}
