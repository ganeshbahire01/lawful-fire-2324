import React from "react";
import {
  Flex,
  Text,
  Box,
  Image,
  Card,
  CardBody,
  SimpleGrid,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Liupdate from "../Components/Card";
import TableData from "../Components/TableData";

const Programs = () => {
  return (
    <div>
      <Box
        h="500px"
        backgroundImage="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg"
        marginTop={"-25px"}
      >
        <Box width={"73%"} padding="130px 150px" alignItems={"center"}>
          <Text fontSize={"12px"} color="#4296cb"></Text>

          <Text fontSize={"12px"} color="blue">
            <b>ONLINE WORKOUT VIDEOS</b>
          </Text>
          <Text fontSize={"45px"} color="white">
            Find Your Fitness.
          </Text>
          <Text fontSize={"45px"} color="white">
            Something for Everyone.
          </Text>
          <Text color="white">
            A huge selection of workout videos and programs to help you look and
            feel your best.
          </Text>
        </Box>{" "}
      </Box>
      <Flex justify={"center"} color="blue">
        <Box p="2">
          <Text size="md">WORKOUT PROGRAMS</Text>
        </Box>
        <Box p="2">
          <Text size="md">WORKOUT CHALLENGES</Text>
        </Box>
        <Box p="2">
          <Text size="md">MEAL PLANS</Text>
        </Box>
        <Box p="2">
          <Text size="md">PILOT PROGRAMS</Text>
        </Box>
      </Flex>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Full-Length Workout Programs</Text>
            <Text color={"blue.500"}>View All</Text>
          </Flex>

          <Liupdate data={LiData} />
        </Box>{" "}
      </Box>
      <Box marginBottom={"40px"}>
        <Text
          fontSize={"40px"}
          marginLeft="160px"
          marginTop={"50px"}
          marginBottom="20px"
        >
          Workout Program Features
        </Text>
        <TableData />
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Full-Length Workout Programs</Text>
            <Text color={"blue.500"}>View All</Text>
          </Flex>
          <Liupdate data={SecLiData} />
        </Box>{" "}
      </Box>
      <Box marginBottom={"40px"}>
        <Text
          fontSize={"40px"}
          marginLeft="160px"
          marginTop={"50px"}
          marginBottom="20px"
        >
          Workout Program Features
        </Text>
        <TableData />
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Full-Length Workout Programs</Text>
            <Text color={"blue.500"}>View All</Text>
          </Flex>
          <Liupdate data={MealData} />
        </Box>{" "}
        <Liupdate />
      </Box>{" "}
      <Box>
        <Text fontSize={"40px"} marginLeft="160px">
          Workout Program Features
        </Text>
        <TableContainer>
          <Table size="sm" width={"80%"} margin="auto">
            <Thead>
              <Tr>
                <Th>Features</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={"18px"}>
                  Work out with research-backed programs designed by Certified
                  Personal Trainers (CPTs).
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Follow expertly-curated combinations of workouts from our free
                  video library.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Take the guesswork out of planning routines and picking
                  workouts.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Focus your exercise time with proper structure for more
                  effective results.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Learn to modify individual exercises to accommodate virtually
                  any fitness level.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Improve overall health and functional fitness.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Schedule and track progress via the FB Calendar.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Review each day's objectives and workout details.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>Complete as many times as you like.</Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize={"18px"}>
                  Get additional tips and information with a detailed program
                  and nutrition guide.
                </Td>
                <Td color={"green"} fontSize="20px">
                  <CheckCircleIcon />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Programs;
const LiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-8774-fb-reboot-8-week-program-to-jumpstart-your-fitness-routine-83b3.jpg",
    p: "8 WEEK PROGRAM - 35 MIN/DAY",
    h: "FB Reboot: 8-Week Program to Jumpstart Your Fitness Routine",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-bd26.jpg ",
    p: "4 WEEK PROGRAM - 32 MIN/DAY",
    h: "4-Week FB Benchmark Program – Total Body Strength and Conditioning",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
    p: "4 WEEK PROGRAM - 40 MIN/DAY",
    h: "4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1133-single-weight-upper-body-a19e.jpg",
    p: "4 WEEK PROGRAM - 39 MIN/DAY",
    h: "4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
    val: "Included with FB Plus!",
  },
];
const SecLiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-9958-fb-3-day-3-workouts-per-week-for-2-weeks-91fc.jpg",
    p: "8 WEEK PROGRAM - 35 MIN/DAY",
    h: "FB Reboot: 8-Week Program to Jumpstart Your Fitness Routine",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-9687-fb-just-your-body-2-week-no-equipment-challenge-b0df.jpg",
    p: "4 WEEK PROGRAM - 32 MIN/DAY",
    h: "4-Week FB Benchmark Program – Total Body Strength and Conditioning",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-9443-fb-pilates-immersion-2-week-pilates-challenge-for-foundational-strength-and-stability-935e.jpg",
    p: "4 WEEK PROGRAM - 40 MIN/DAY",
    h: "4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-8622-fb-strong-runner-2-week-strength-focused-challenge-for-improving-running-performance-9544.jpg",
    p: "4 WEEK PROGRAM - 39 MIN/DAY",
    h: "4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
    val: "Included with FB Plus!",
  },
];
const MealData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7739-strength-building-meal-plan-9d87.jpg",
    p: "1 WEEK PROGRAM - 10 MIN/DAY",
    h: "Strength Building Meal Plan",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7738-meals-under-30-minutes-meal-plan-for-busy-people-a32a.jpg",
    p: "1 WEEK PROGRAM - 20 MIN/DAY",
    h: "Meals Under 30 Minutes: Meal Plan for Busy People",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7128-around-the-world-1-week-omnivore-meal-plan-b211.jpg",
    p: "1 WEEK PROGRAM - 20 MIN/DAY",
    h: "Around the World 1-Week Omnivore Meal Plan",
    val: "Included with FB Plus!",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_21_fb-meal-plan-eat-real-food-and-feel-great.jpg",
    p: "4 WEEK PROGRAM",
    h: "FB Meal Plan - Eat Real Food & Feel Great",
    val: "$ 24.99",
  },
];
