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

const WorkOut = () => {
  return (
    <div>
      <Box
        h="500px"
        backgroundImage="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg"
        marginTop={"-25px"}
      >
        <Box width={"73%"} padding="130px 150px" alignItems={"center"}>
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
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Newest Free Workout Videos</Text>
            <Text color={"blue.500"}>Newest Free Workout Videos</Text>
          </Flex>
          <Liupdate />
        </Box>{" "}
      </Box>
      <Box bg={"#ffffff"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Newest Plus Workout Videos</Text>
            <Text color={"blue.500"}>View All Plus Workouts</Text>
          </Flex>
          <SecLiFun />
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Beginner Workouts</Text>
            <Text color={"blue.500"}>View All Beginner Workouts</Text>
          </Flex>
          <ThiSelFun />
        </Box>{" "}
      </Box>
      <Box bg={"#ffffff"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>HIIT Workouts</Text>
            <Text color={"blue.500"}>View All HIIT Workouts</Text>
          </Flex>
          <ForLiFun />
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>Strength Workouts</Text>
            <Text color={"blue.500"}>View All Strength Workouts</Text>
          </Flex>
          <FivLiFun />
        </Box>{" "}
      </Box>
    </div>
  );
};

export default WorkOut;
const LiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1167-kickboxing-kettlebell-and-core-b94e.jpg",
    p: "Bored Easily Combo Workout",
    h: "Kickboxing, Kettlebell, and Core",
    val: "38 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1022-beginner-friendly-cardio-warm-up-bae7.jpg",
    p: "Low-Impact Feel-Good Exercises",
    h: "Beginner-Friendly Cardio Warm Up",
    val: "10 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1083-restorative-bodyweight-workout-ac41.jpg",
    p: "Low Impact Exercises for Sore Muscles",
    h: "Restorative Bodyweight Workout",
    val: "24 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1133-single-weight-upper-body-a19e.jpg",
    p: "Quick Strength Training Circuit",
    h: "Single Weight Upper Body",
    val: "23 Min • Total Body",
  },
];
const Liupdate = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {LiData.map((el) => (
        <Box>
          <Card maxW="sm" h="320px" marginTop="10px">
            <CardBody
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="">
                <Heading size="sm">{el.h}</Heading>
                <Text>{el.p}</Text>
                <Text color="blue.600" fontSize="14px">
                  {el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
const SecLiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg",
    p: "Tabata-Inspired Intervals and Feel-Good Foam Rolling",
    h: "Quick HIIT With Extended Cool Down",
    val: "29 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg",
    p: "Weighted Circuits with Bodyweight Tempo Training",
    h: "Lower Body Strength",
    val: "66 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1155-express-upper-body-90e4.jpg",
    p: "Bored-Easily Strength Intervals",
    h: "Express Upper Body",
    val: "17 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1148-lower-body-unilateral-training-8609.jpg",
    p: "Unilateral Exercises for Muscle Imbalances",
    h: "Lower Body Corrective Circuit",
    val: "19 Min • Total Body",
  },
];
const SecLiFun = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {SecLiData.map((el) => (
        <Box>
          <Card maxW="sm" h="320px" marginTop="10px">
            <CardBody
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="">
                <Heading size="sm">{el.h}</Heading>
                <Text>{el.p}</Text>
                <Text color="blue.600" fontSize="14px">
                  {el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
const ThiLiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg",
    p: "With Low Impact, Advanced, and Bodyweight Options",
    h: "Lower Body Strength and HIIT Cardio",
    val: "40 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1022-beginner-friendly-cardio-warm-up-bae7.jpg",
    p: "Low-Impact Feel-Good Exercises",
    h: "Beginner-Friendly Cardio Warm Up",
    val: "10 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1141-weighted-core-strength-98b4.jpg",
    p: "Functional Core Correction and Cross-Training",
    h: "Weighted Core Strength",
    val: "19 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1143-bored-easily-strength-afcd.jpg",
    p: "Dumbbell Workout With No Repeated Exercises",
    h: "Bored Easily Strength",
    val: "40 Min • Total Body",
  },
];
const ThiSelFun = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {ThiLiData.map((el) => (
        <Box>
          <Card maxW="sm" h="320px" marginTop="10px">
            <CardBody
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="">
                <Heading size="sm">{el.h}</Heading>
                <Text>{el.p}</Text>
                <Text color="blue.600" fontSize="14px">
                  {el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
const FourLiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg",
    p: "Tabata-Inspired Intervals and Feel-Good Foam Rollings",
    h: "Quick HIIT With Extended Cool Down",
    val: "29 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg",
    p: "Ascending and Descending Cardio Ladders",
    h: "Aerobic Step HIIT",
    val: "33 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1141-weighted-core-strength-98b4.jpg",
    p: "With Low Impact, Advanced, and Bodyweight Options",
    h: "Lower Body Strength and HIIT Cardio",
    val: "40 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1139-low-impact-tabata-hiit-a11e.jpg",
    p: "Sweaty Level 5 Circuits",
    h: "Low Impact Tabata HIIT",
    val: "33 Min • Total Body",
  },
];
const ForLiFun = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {FourLiData.map((el) => (
        <Box>
          <Card maxW="sm" h="320px" marginTop="10px">
            <CardBody
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="">
                <Heading size="sm">{el.h}</Heading>
                <Text>{el.p}</Text>
                <Text color="blue.600" fontSize="14px">
                  {el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
const FivLiData = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg",
    p: "Weighted Circuits with Bodyweight Tempo Training",
    h: "Lower Body Strength",
    val: "29 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1148-lower-body-unilateral-training-8609.jpg",
    p: "Unilateral Exercises for Muscle Imbalances",
    h: "Lower Body Corrective Circuit",
    val: "19 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1167-kickboxing-kettlebell-and-core-b94e.jpg",
    p: "Bored Easily Combo Workout",
    h: "Kickboxing, Kettlebell, and Core",
    val: "38 Min • Total Body",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1133-single-weight-upper-body-a19e.jpg",
    p: "Quick Strength Training Circuit",
    h: "Single Weight Upper Body",
    val: "23 Min • Total Body",
  },
];
const FivLiFun = () => {
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {FivLiData.map((el) => (
        <Box>
          <Card maxW="sm" h="320px" marginTop="10px">
            <CardBody
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src={el.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="">
                <Heading size="sm">{el.h}</Heading>
                <Text>{el.p}</Text>
                <Text color="blue.600" fontSize="14px">
                  {el.val}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
