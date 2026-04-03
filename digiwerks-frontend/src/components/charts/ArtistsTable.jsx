import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Heading,
  useTheme
} from "@chakra-ui/react";
import { useState } from "react";

const ArtistsTable = ({ artists }) => {
    const theme = useTheme();
    const [search, setSearch] = useState("");

    // 🔍 Filter artists by username
    const filteredArtists = artists.filter((artist) =>
    artist.username.toLowerCase().includes(search.toLowerCase())
    );

    // 🧠 Helper: calculate account age
    const getAccountAge = (createdAt) => {
        const created = new Date(createdAt);
        const now = new Date();

        const diffTime = now - created;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 30) return `${diffDays} days`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months`;
        return `${Math.floor(diffDays / 365)} years`;
    };

    return (
    <Box
        bg="white"
        borderRadius="xl"
        border={`4px solid ${theme.colors.brand.pink}`}
        p={5}
        boxShadow="md"
        mt={6}
    >
        {/* 🔹 Header */}
        <Heading size="md" mb={4} color="brand.blue" justifySelf="center">
        Artists Overview
        </Heading>

        {/* 🔍 Search Bar */}
        <Input
        placeholder="Search by username..."
        mb={4}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        {/* 📊 Table */}
        <Table variant="simple">
        <Thead>
            <Tr>
            <Th color={theme.colors.brand.blue}>Username</Th>
            <Th color={theme.colors.brand.blue}>Email</Th>
            <Th color={theme.colors.brand.blue}>Projects</Th>
            <Th color={theme.colors.brand.blue}>Joined</Th>
            </Tr>
        </Thead>

        <Tbody>
            {filteredArtists.map((artist) => (
            <Tr key={artist._id}>
                {/* Username + ID */}
                <Td>
                <Text fontWeight="bold">{artist.username}</Text>
                <Text fontSize="sm" color="gray.500">
                    ID: {artist._id}
                </Text>
                </Td>

                {/* Email */}
                <Td>{artist.email}</Td>

                {/* Project count */}
                <Td>{artist.projects.length}</Td>

                {/* Created date + account age */}
                <Td>
                <Text>
                    {new Date(artist.created_at).toLocaleDateString()}
                </Text>
                <Text fontSize="sm" color="gray.500">
                    {getAccountAge(artist.created_at)} active
                </Text>
                </Td>
            </Tr>
            ))}
        </Tbody>
        </Table>
    </Box>
    );
};

export default ArtistsTable;