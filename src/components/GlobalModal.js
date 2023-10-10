import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import useGlobalModal from "../hooks/useGlobalModal";

export default function GlobalModal() {
  const { showGlobalModal, setShowGlobalModal, globalModalContent } = useGlobalModal();

  const onClose = () => setShowGlobalModal(false);

  return (
    <Modal isOpen={showGlobalModal} onClose={onClose} isCentered size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box whiteSpace={"pre-line"}>
            {(globalModalContent && JSON.stringify(globalModalContent, null, 4)) || "No content"}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
