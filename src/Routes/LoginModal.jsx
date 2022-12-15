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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import CompExample from "./Sucees";

function BackdropExample({ name, color }) {
  const [spiin, isSpiin] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  //   console.log(user);
  const handelUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handelPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const SignUp = () => {
    // console.log(user);
    // isSpiin(true);
    const { username, password } = user;
    if (username == "" || password == "") {
      alert("Please fill both username and Password");
    } else {
      alert("SignUp Succesfull Please Login");
      onClose();
    }
  };

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
              <Input
                placeholder={`${name === "Google" ? "Email" : name} Id`}
                name="username"
                onChange={handelUsername}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type={"password"}
                name="password"
                onChange={handelPassword}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button color="green" marginRight={"10px"} onClick={SignUp}>
              SignUp
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BackdropExample;
