import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaYoutube,
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#212432"} color={"white"} h="350px">
      <Container as={Stack} maxW={"6xl"} py={10} paddingTop="60px">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box w="250px">
              {/* <Logo color={useColorModeValue("gray.700", "white")} /> */}
              <Image
                w="200px"
                h="80px"
                src="https://i.ibb.co/cbkfwXV/Fitness-Center-Logo.png"
              />
            </Box>
            <Text fontSize={"sm"}>WORKOUT COMPLETE™</Text>
          </Stack>
          <Flex marginLeft="250px" gap={"100px"}>
            <Stack align={"flex-start"} w="150px">
              <ListHeader>WORKOUTS</ListHeader>
              <Link to="/workout">WORKOUT VIDEOS</Link>
              <Link to="/workout">WORKOUTS</Link>
              <Link to="/workout">Tutorials</Link>
              <Link to="/workout">Pricing</Link>
              <Link to="/workout">PROGRAMS</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>HEALTH</ListHeader>
              <Link to="/helhty_living">FITNESS</Link>
              <Link to="/helhty_living">HEALTH</Link>
              <Link to="/helhty_living">NUTRITION</Link>
              <Link to="/helhty_living">RECIPES</Link>
              <Link to="/helhty_living">EXPERTS</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>ABOUT</ListHeader>
              <Link to="">CAREERS</Link>
              <Link to="">TUTORIALS</Link>
              <Link to="">OUR TEAM</Link>
              <Link to="">B2B</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>MEMBERSHIP</ListHeader>
              <Link to="">FB PLUS</Link>
              <Link to="">TWITTER</Link>
              <Link to="">COMMUNITY</Link>
              <Link to="">Instagram</Link>
              <Link to="">LinkedIn</Link>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
      <Flex gap="600px" marginTop={"30px"} marginLeft="180px">
        <Box>
          <Text color="gray">
            Copyright © 2022 Fitness Blender. All rights reserved. Terms of Use
            Privacy Policy
          </Text>
        </Box>
        <Flex gap="15px">
          <FaYoutube />
          <FaPinterestSquare />
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitter />
        </Flex>
      </Flex>
    </Box>
  );
}
