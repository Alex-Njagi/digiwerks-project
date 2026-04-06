import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Box,
  Text,
  useTheme,
  Heading,
  Input
} from "@chakra-ui/react";

const ArtistDetailsModal = ({ artist, isOpen, onClose }) => {
    const theme = useTheme();

    if (!artist) return null;

    const getWorkflowStats = (artist) => {
        let projects = artist.projects.length;
        let stages = 0;
        let assets = 0;
        let versions = 0;

        artist.projects.forEach((project) => {
            stages += project.project_stages.length;

            project.project_stages.forEach((stage) => {
            assets += stage.assets.length;

            stage.assets.forEach((asset) => {
                versions += asset.asset_versions.length;
            });
            });
        });

        return [
            { name: "Cumulative Projects", value: projects },
            { name: "Cumulative Project Stages", value: stages },
            { name: "Cumulative Project Assets", value: assets },
            { name: "Cumulative Asset Versions", value: versions },
        ];
    };

    const data = getWorkflowStats(artist);

    const COLORS = [
    theme.colors.brand.pink,
    theme.colors.brand.blue,
    theme.colors.brand.pastelPink,
    "#8884d8"
    ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>            
            <Heading size="md" mb={4} color="brand.pink" justifySelf="center">
                {artist.username}'s Workflow
            </Heading>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex gap={6} m={6}>
            {/* 🔹 LEFT: Pie Chart */}
            <Box flex="1" height="300px">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={100}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>

            {/* 🔹 RIGHT: Summary Panel */}
            <Box flex="1">
              {data.map((item) => (
                <Box
                  key={item.name}
                  mb={3}
                  p={3}
                  borderRadius="md"
                //   border={`1px solid ${theme.colors.brand.blue}`}
                >
                  <Text fontWeight="bold" color={theme.colors.brand.blue}>{item.name}</Text>
                  <Text>{item.value}</Text>
                </Box>
              ))}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ArtistDetailsModal