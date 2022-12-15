import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {
  Button,
  Text,
  ButtonGroup,
  Flex,
  Box,
  Input,
  Stack,
  Checkbox,
  textDecoration,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import BackdropExample from "./LoginModal";
import CompExample from "./Sucees";

const Signup = () => {
  const { user, setUser } = useContext(AuthContext);
  const [spiin, isSpiin] = useState(false);
  // console.log(user);
  let LoginUser = {
    username: "",
    password: "",
  };
  const handeLoginUser = (e) => {
    LoginUser.username = e.target.value;
  };
  const handelLogPass = (e) => {
    LoginUser.password = e.target.value;
  };
  const handelclick = () => {
    // console.log(LoginUser);
    // console.log(user)
    if (
      LoginUser.username == user.username &&
      LoginUser.password == user.password
    ) {
      alert("Login Sucesfully");
      isSpiin(true);
    } else {
      alert("Wrong username & password");
    }
  };
  if (spiin) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <Flex justify="center" marginTop={"70px"}>
        <Text fontSize="45px">Sign In</Text>
      </Flex>
      <Flex justify={"center"} gap="20px" marginTop={"15px"}>
        <BackdropExample name={"Facebook"} color="blue" />
        <BackdropExample name={"Google"} color="red" />
      </Flex>
      <Flex justify={"center"} marginTop="20px">
        <Text color={"gray.300"}>
          -------------------------------------- or
          ------------------------------------------
        </Text>
      </Flex>
      <Flex justify={"center"} marginTop="25px">
        <Stack spacing={5}>
          <Box justify={"center"}>
            <Input
              width={"305px"}
              placeholder="Usernanme"
              onChange={handeLoginUser}
            />
          </Box>{" "}
          <Box justify={"center"}>
            <Input
              width={"305px"}
              placeholder="Password"
              onChange={handelLogPass}
            />
          </Box>{" "}
          <Box>
            <Checkbox defaultChecked>Remember Me</Checkbox>
          </Box>
          <Box>
            <Button w="305px" bg="#4296cb" color="white" onClick={handelclick}>
              SIGN IN
            </Button>
          </Box>
          <Flex justify="center">
            <Text color="#4296cb" _hover={{ textDecoration: "underline" }}>
              Forgot Password?
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <Flex marginTop="70px" marginBottom="70px" justify="center">
        <Text>Not a member yet? Join now -- it’s free!</Text>
      </Flex>
    </Box>
  );
};

export default Signup;
