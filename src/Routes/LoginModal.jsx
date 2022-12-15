import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React from "react";
function BackdropExample({ name, color }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        bg={color}
        color="white"
        w="250px"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {name}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{name} SignUP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{name === "Google" ? "Email" : name} Id</FormLabel>
              <Input placeholder={`${name === "Google" ? "Email" : name} Id`} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type={"password"} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>SinUP</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BackdropExample;
