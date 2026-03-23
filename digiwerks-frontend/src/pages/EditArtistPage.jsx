import { Heading } from "@chakra-ui/react";
import ArtistForm from "../components/forms/ArtistForm";
import { useLocation } from "react-router-dom";

export default function EditArtist() {
  const location = useLocation();
  const artist = location.state?.artist;

  return (
    <>
    {/* Section Header */}
    <Heading size="lg" mb={2} color="brand.blue" justifySelf="center" p={7}>
      Update Your Account Today!
    </Heading>

    <ArtistForm 
      mode = "edit"
      initialData={artist}
    />
    </>
  )
}