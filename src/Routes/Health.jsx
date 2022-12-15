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
import Liupdate from "../Components/Card";
const Health = () => {
  return (
    <div>
      <Box
        h="500px"
        backgroundImage="https://d18zdz9g6n5za7.cloudfront.net/healthy_living/masthead-healthy.jpg"
        marginTop={"-25px"}
      >
        <Box width={"73%"} padding="130px 150px" alignItems={"center"}>
          <Text fontSize={"12px"} color="#4296cb">
            <b>HEALTHY LIVING</b>
          </Text>
          <Text fontSize={"45px"} color="white">
            Live Well, Feel Great and Look
          </Text>
          <Text fontSize={"45px"} color="white">
            Great.
          </Text>
          <Text color="white">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </Text>
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Fitness</b>
            </Text>
            <Text color={"blue.500"}>View All Fitness Articles</Text>
          </Flex>
          <Liupdate data={Fitness} />
        </Box>{" "}
      </Box>
      <Box bg={"#ffffff"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Health</b>
            </Text>
            <Text color={"blue.500"}>View All Health Articles</Text>
          </Flex>
          <Liupdate data={Healthh} />
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Nutrition</b>
            </Text>
            <Text color={"blue.500"}>View All Nutrition Articles</Text>
          </Flex>
          <Liupdate data={Nutrition} />
        </Box>{" "}
      </Box>
      <Box bg={"#ffffff"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Healthy Recipes</b>
            </Text>
            <Text color={"blue.500"}>View All Healthy Recipes</Text>
          </Flex>
          <Liupdate data={Recipes} />
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Experts</b>
            </Text>
            <Text color={"blue.500"}>View All Experts Articles</Text>
          </Flex>
          <Liupdate data={Experts} />
        </Box>{" "}
      </Box>
      <Box bg={"#ffffff"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Mental Health </b>
            </Text>
            <Text color={"blue.500"}>View All Mental Health Artical</Text>
          </Flex>
          <Liupdate data={Mental} />
        </Box>{" "}
      </Box>
      <Box bg={"#e3ebee"} h="500px" paddingTop={"40px"}>
        <Box width={"83%"} margin="auto">
          <Flex justify={"space-between"} width="91%" margin={"auto"}>
            <Text fontSize={"38px"}>
              <b>Wellness Videos</b>
            </Text>
            <Text color={"blue.500"}>View All Videos </Text>
          </Flex>
          <Liupdate data={Welness} />
        </Box>{" "}
      </Box>
    </div>
  );
};

export default Health;
const Fitness = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1195-what-is-rib-flare-and-how-to-tell-if-you-have-it-9bb4.jpg",
    p: "Read Time • 7 Min",
    h: "What is Rib Flare and How to Tell if You Have It",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1126-looking-to-start-a-family-what-you-need-to-know-about-exercise-and-fertility-a2cc.jpg",
    p: "1 WEEK PROGRAM - 20 MIN/DAY",
    h: "Meals Under 30 Minutes: Meal Plan for Busy People",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1125-how-to-do-a-burpee-fitnessblenders-comprehensive-guide-846b.jpg",
    p: "1 WEEK PROGRAM - 20 MIN/DAY",
    h: "Around the World 1-Week Omnivore Meal Plan",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1039-new-to-running-heres-what-you-should-know-a558.jpg",
    p: "4 WEEK PROGRAM",
    h: "FB Meal Plan - Eat Real Food & Feel Great",
  },
];
const Healthh = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1130-understanding-the-importance-of-the-pelvic-floor-during-pregnancy-9207.jpg",
    p: "Read Time • 6 Min",
    h: "Understanding the Importance of the Pelvic Floor During Pregnancy",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1039-new-to-running-heres-what-you-should-know-a558.jpg",
    p: "Read Time • 9 Min",
    h: "New to Running? Here’s What You Should Know",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1030-10-exercises-you-can-do-at-work-b9c7.jpg",
    p: "Read Time • 8 Min",
    h: "10 Exercises You Can Do At Work",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1024-helpful-exercises-for-knee-valgus-ae6d.jpg",
    p: "Read Time • 9 Min",
    h: "Helpful Exercises for Knee Valgus",
  },
];
const Nutrition = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1134-the-relationship-between-food-and-mood-9c6d.jpg",
    p: "Read Time • 15 Min",
    h: "The Relationship Between Food and Mood",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-994-7-health-benefits-to-eating-meals-as-a-family-8390.jpg",
    p: "Read Time • 9 Min",
    h: "7 Health Benefits to Eating Meals as a Family",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-944-eating-disorders-explained-contributing-factors-and-lived-experiences-ade2.jpg",
    p: "Read Time • 11 Min",
    h: "Eating Disorders Explained, Contributing Factors, and Lived Experiences",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-908-understanding-sugar-addiction-and-ways-to-moderate-sugar-consumption-92d4.jpg",
    p: "Read Time • 8 Min",
    h: "Understanding Sugar Addiction and Ways to Moderate Sugar Consumption",
  },
];
const Recipes = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1269-banana-and-almond-snack-ab08.jpg",
    p: "Healthy Recipes",
    h: "Banana and Almond Snack",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1081-shakshuka-breakfast-pizza-aea2.jpg",
    p: "Healthy Recipes",
    h: "Shakshuka Breakfast Pizza North-African and Middle Eastern Inspired Breakfast",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1219-bbq-chicken-sandwich-9bef.jpg",
    p: "Healthy Recipes",
    h: "BBQ Chicken Sandwich With Kale, Tomatoes, and Cheddar",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1289-baked-chicken-and-rice-casserole-a7bc.jpg",
    p: "Healthy Recipes",
    h: "Baked Chicken and Rice Casserole",
  },
];
const Experts = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1126-looking-to-start-a-family-what-you-need-to-know-about-exercise-and-fertility-a2cc.jpg",
    p: "Read Time • 9 Min",
    h: "Looking to Start a Family? What You Need to Know About Exercise and Fertility",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1039-new-to-running-heres-what-you-should-know-a558.jpg",
    p: "Read Time • 9 Min",
    h: "New to Running? Here’s What You Should Know",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1030-10-exercises-you-can-do-at-work-b9c7.jpg",
    p: "Read Time • 8 Min",
    h: "10 Exercises You Can Do At Work",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1031-6-ways-to-overcome-gym-anxiety-9733.jpg",
    p: "Read Time • 11 Min",
    h: "6 Ways to Overcome Gym Anxiety",
  },
];
const Mental = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1316-the-role-of-exercise-in-addiction-treatment-a022.jpg",
    p: "Read Time • 8 Min",
    h: "The Role of Exercise in Addiction Treatment",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1314-how-to-promote-a-positive-body-image-in-your-children-b97e.jpg",
    p: "Read Time • 12 Min",
    h: "How to Promote a Positive Body Image in Your Child(ren)",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1315-how-personality-traits-shape-exercise-behaviors-b45e.jpg",
    p: "Read Time • 10 Min",
    h: "How Personality Traits Shape Exercise Behaviors",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1313-when-rest-is-more-important-than-working-out-9898.jpg",
    p: "Read Time • 10 Min",
    h: "When Rest is More Important Than Working Out",
  },
];
const Welness = [
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/640/640-68-meditation-to-prepare-for-childbirth-9834.jpg",
    p: "Read Time • 12 Min",
    h: "Meditation to Prepare for Childbirth",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/640/640-65-bedtime-stress-reduction-9b19.jpg",
    p: "Read Time • 20 Min",
    h: "Bedtime Stress Reduction Guided Meditation for Better Sleep",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/640/640-67-guided-practice-to-embrace-vulnerability-96cb.jpg",
    p: "Read Time • 10 Min",
    h: "Guided Practice to Embrace Vulnerability",
  },
  {
    img: "https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/640/640-66-soothing-meditation-to-get-back-to-sleep-bc83.jpg",
    p: "Read Time • 10 Min",
    h: "Soothing Meditation to Get Back to Sleep",
  },
];
