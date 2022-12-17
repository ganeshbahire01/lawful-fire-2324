import React from "react";
import {
  Flex,
  Center,
  Text,
  Square,
  Box,
  Image,
  Button,
  VStack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

import "../Styles/Landing.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="homeH">
        <Flex color="white" justify="center" flexDirection="" height="550px">
          <VStack justify="center" w="500px" height="500px">
            <Box>
              <Text fontSize={"35px"}>Feel Great.</Text>
              <Text fontSize={"35px"}>Body and Mind.</Text>
              <p>
                Choose from hundreds of workouts, healthy recipes, relaxing
                meditations, and expert articles, for a whole body and mind
                approach to feeling great.
              </p>

              <Button bg={"black"} mt="20px">
                 JOIN NOW
              </Button>
            </Box>
          </VStack>
          <Square size="450px">
            <Image
              height={"500px"}
              width="550px"
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"
            />
          </Square>
        </Flex>
      </div>
      <Box bg="gray.200">
        <HStack margin={"auto"} textAlign="center" width="350px">
          <Box>
            <Text fontSize={"35px"}>Introducing</Text>
            <Text fontSize={"40px"}>FB Plus Passes</Text>
            <p>
              Passes give you full access to everything FB Plus has to offer,
              without a long-term subscription. Choose a pass that fits your
              budget and your schedule.
            </p>
            <Link to="/pases">
              <Button bg={"black"} color="white" mt="25px">
                BUY A PASS
              </Button>
            </Link>
          </Box>
        </HStack>
        <HStack justify="center">
          <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp" />
        </HStack>
      </Box>

      <BeloData />
      <div>
        <HStack margin={"auto"} textAlign="center" width="500px">
          <Box>
            <Text fontSize={"40px"}>Supportive Community</Text>
            <Text fontSize={"15px"}>
              Stay motivated and engaged with a little help from a supportive
              community of other members.
            </Text>
            <p>Become a Member</p>
          </Box>
        </HStack>
        <HStack justify="center">
          <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-1440.webp" />
        </HStack>
      </div>
      <Box margin={("80px", "0px", "20px", "80px")}>
        <Text fontSize={"40px"}>Not sure where to start?</Text>
        <Text>
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </Text>
      </Box>
      <Box margin={("20px", "0px", "35px")}>
        <Liupdate />
      </Box>
    </div>
  );
}

export default Home;

const Bdata = [
  {
    head: "Workout Videos",
    p: "Exercise with certified personal trainers whether you’re at home or on the road.",
    l: "Find a Workout",
    img: "https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp",
  },
  {
    head: "Programs",
    p: "Professionally designed programs take the guesswork out of exercising.",
    l: "Browse All Programs",
    img: "https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp",
  },
  {
    head: "Wellness Articles",
    p: "Research-backed articles to help you care for your body and mind.",
    l: "Learn from Experts",
    img: "https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp",
  },
  {
    head: "Healthy Recipes",
    p: "Fuel your day with recipes by Registered Dietitians and professional chefs.",
    l: "Find a Recipe",
    img: "https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp",
  },
];

const LiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg",
    p: "4 WEEK PROGRAM - 34MIN/DAY",
    h: "FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less mode_comment 179",
    u: "Perfect for Beginners",
    val: 14.99,
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg",
    p: "4 WEEK PROGRAM - 34MIN/DAY",
    h: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
    u: "You Choose",
    val: 14.99,
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg",
    p: "4 WEEK PROGRAM - 34MIN/DAY",
    h: "FB 30 - Fat Loss Program For Busy People (Round 4)",
    u: "Short on Time?",
    val: 14.99,
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg",
    p: "4 WEEK PROGRAM - 34MIN/DAY",
    h: "FB Bodyweight - Bodyweight Only Fat Loss Program",
    u: "No Equipment Necessary",
    val: 14.99,
  },
];
const BeloData = () => {
  return (
    <SimpleGrid spacing={4} templateColumns="repeat(2, minmax(100px, 1fr))">
      {Bdata.map((el) => (
        <Card display={"flex"} alignItems="center">
          <CardHeader>
            <Heading size="lg"> {el.head}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{el.p}</Text>
          </CardBody>
          <Text alignItems="center">{el.l}</Text>
          <CardFooter>
            <Image src={el.img} />
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

const Liupdate = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {LiData.map((el) => (
        <Box>
          <Text fontSize="20px">{el.u}</Text>
          <Card maxW="sm" marginTop="10px">
            <CardBody
              _hover={{
                border: "5px solid blue",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text>{el.p}</Text>
                <Heading size="sm">{el.h}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  ${el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
