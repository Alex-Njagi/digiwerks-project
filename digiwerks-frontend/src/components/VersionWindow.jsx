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
import FeedbackCard from "./FeedbackCard";
import { useNavigate } from "react-router-dom";

export default function VersionWindow ({ isOpen, onClose, version }) {
  // console.log(version);
  const navigate = useNavigate()
  const feedbacks = version.feedbacks
  console.log(feedbacks);
  

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

                <Divider borderColor="brand.pink"/>

                {/* Description */}
                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    Description
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    {version.change_notes}
                  </Text>
                </Box>

                <Button
                  size="sm"
                  bg="brand.pink"
                  color="white"
                  _hover={{ bg: "brand.blue" }}
                  onClick={() => navigate("/version/edit")}
                >
                  Edit
                </Button>

                <Divider borderColor="brand.blue"/>


                
                <FeedbackCard feedbacks={feedbacks}/>
              </VStack>
            </Flex>

          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};