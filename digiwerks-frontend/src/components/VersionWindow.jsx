import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Divider,
  Heading,
  Button
} from "@chakra-ui/react";

export default function VersionWindow ({ isOpen, onClose, version }) {
  console.log(version);
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent bg="white" maxH="90vh">
        <ModalBody p={0}>
          <Flex h="90vh">
            
            {/* LEFT — ARTWORK */}
            <Flex
              flex="1"
              bg="black"
              align="center"
              justify="center"
            >
              <Image
                src= {version.file_url}
                alt="Version artwork"
                maxH="100%"
                maxW="100%"
                objectFit="contain"
              />
            </Flex>

            {/* RIGHT — INFO PANEL */}
            <Flex
              flex="1"
              direction="column"
              p={6}
              overflowY="auto"
            >
              <VStack align="stretch" spacing={4}>
                
                {/* Asset Header */}
                <Box>
                  <Heading size="md" color="brand.pink">Asset Name</Heading>
                  <Text fontSize="sm" color="gray.500">
                    Version Number: {version.version_number}
                  </Text>
                  <Text fontSize="sm" color="brand.blue">
                    Artist Name — Project Title
                  </Text>
                </Box>

                <Divider />

                {/* Description */}
                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    Description
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    {version.change_notes}
                  </Text>
                </Box>

                <Divider />

                {/* Feedback Card */}
                <Box
                  p={4}
                  bg="gray.50"
                  borderRadius="md"
                >
                  <Text fontWeight="semibold" mb={2}>
                    Feedback
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Existing feedback entries will appear here.
                  </Text>
                </Box>

                <Divider />

                {/* Submit Feedback */}
                <Box
                  p={4}
                  bg="brand.pastelPink"
                  borderRadius="md"
                >
                  <Text fontWeight="semibold" mb={2}>
                    Submit Feedback
                  </Text>
                  <Button size="sm" colorScheme="pink">
                    Add Comment
                  </Button>
                </Box>

              </VStack>
            </Flex>

          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};