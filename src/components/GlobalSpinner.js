import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Center,
} from "@chakra-ui/react";
import useGlobalSpinner from "../hooks/useGlobalSpinner";

export default function GlobalSpinner() {
  const { showGlobalSpinner } = useGlobalSpinner();

  return (
    <Modal isOpen={showGlobalSpinner} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent bg="transparent" shadow="none">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Center bg="transparent" h="100%" w="100%">
            <Spinner thickness="6px" speed="0.65s" color="blue.500" size="xl" />
          </Center>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
