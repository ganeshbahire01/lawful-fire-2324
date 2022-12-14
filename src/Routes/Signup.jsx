import React from "react";
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
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box>
      <Flex justify="center" marginTop={"70px"}>
        <Text fontSize="45px">Sign In</Text>
      </Flex>
      <Flex justify={"center"} gap="20px" marginTop={"15px"}>
        <Button w="250px" bg="blue" color="white" _hover="none">
          Facebook
        </Button>
        <Button w="250px" bg="red" color="white" _hover="none">
          Google
        </Button>
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
            <Input width={"305px"} placeholder="Usernanme" />
          </Box>{" "}
          <Box justify={"center"}>
            <Input width={"305px"} placeholder="Password" />
          </Box>{" "}
          <Box>
            <Checkbox defaultChecked>Remember Me</Checkbox>
          </Box>
          <Box>
            <Button w="305px" bg="#4296cb" color="white">
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
