import axios from "axios";
import React, { useEffect, useState } from "react";
import PassesCard from "./PassesCard";
import { SimpleGrid, Box, Text, Divider } from "@chakra-ui/react";
const Passes = () => {
  const [data, setData] = useState([]);
  const [secData, setSecData] = useState([]);
  const getData = () => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  };
  const secGetData = () => {
    axios
      .get("http://localhost:3000/second")
      .then((res) => setSecData(res.data));
  };
  useEffect(() => {
    getData();
    secGetData();
  }, []);
  return (
    <Box bg="#f0f4f6">
      <Box>
        <Text
          fontSize={"70px"}
          marginLeft={"150px"}
          marginBottom="15px"
          paddingTop={"50px"}
        >
          FB Plus Passes
        </Text>
        <Text marginLeft={"150px"} marginBottom="30px">
          Passes give you full access to everything FB Plus has to offer,
          without a long-term subscription. Choose a pass that fits your budget
          and your schedule, and extend your access with another pass at any
          time. Multiple passes can be purchased at once for longer access.
        </Text>
        <SimpleGrid
          width={"80%"}
          margin="auto"
          templateColumns="repeat(4 ,minmax(80px, 1fr))"
          marginBottom={"120px"}
        >
          {data.map((el) => (
            <PassesCard img={el.img} day={el.day} price={el.price} id={el.id} />
          ))}
        </SimpleGrid>
      </Box>
      <Divider />
      <Box>
        <Text
          fontSize={"70px"}
          marginLeft={"150px"}
          marginBottom="15px"
          marginTop={"50px"}
        >
          Fitness Blender eGift Cards
        </Text>
        <Text marginLeft={"150px"} marginBottom="30px">
          Give the gift of health and fitness with Fitness Blender eGift Cards.
          Send an electronic card via email and the recipient can log in, redeem
          your gift and buy any of our Workout Programs, calendar-based Meal
          Plans, or a membership to FB Plus!
        </Text>
        <SimpleGrid
          width={"80%"}
          margin="auto"
          templateColumns="repeat(4 ,minmax(80px, 1fr))"
          paddingBottom={"120px"}
        >
          {secData.map((el) => (
            <PassesCard img={el.img} day={el.day} price={el.price} id={el.id} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Passes;
