import { Heading } from "@chakra-ui/react";
import ArtistForm from "../components/forms/ArtistForm";

export default function EditArtist() {
  // Temporary mock data (API later)
  const artistData = {
    email: "user@email.com",
    username: "user_name",
    password: "user@emA1l.com",
    bio: "Test User",
    profileImage: "https://placehold.co/400x400"
  };

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
      Update Your Account Today!
    </Heading>

    <ArtistForm 
      mode = "edit"
      initialData={artistData}
    />
    </>
  )
}