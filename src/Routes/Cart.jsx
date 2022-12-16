import { Box, Text, Flex, Divider, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const Cart = () => {
  const [data, setData] = useState([]);
  const [isdata, setisData] = useState(true);
  const handelDelet = (e) => {
    let fil = data.filter((el) => {
      return el.id !== e;
    });
    setData(fil);
    localStorage.setItem("cart", JSON.stringify(fil));
  };
  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("cart"));
    if (x.length !== 0) {
      setisData(false);
    }
    setData(x);
  }, []);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += +data[i].price;
  }
  return isdata ? (
    <Text>Add Item To Cart</Text>
  ) : (
    <Box>
      <Text fontSize={"50px"} ml="130px">
        Shopping Bag
      </Text>
      <Box width={"80%"} margin="auto" mt="20px">
        {data.map((el) => (
          <CartCard
            img={el.img}
            day={el.day}
            price={el.price}
            id={el.id}
            handelDelet={handelDelet}
          />
        ))}
      </Box>
      <Divider />
      <Box>
        <Flex
          justify={"space-between"}
          width={"80%"}
          margin="auto"
          marginBottom={"20px"}
          marginTop="20px"
        >
          <Text fontSize={"30px"}>Cart Total</Text>
          <Text fontSize={"30px"}>{Math.floor(sum)}.99</Text>
        </Flex>
      </Box>
      <Divider />
      <Flex justify={"center"} mt="20px" mb="20px">
        <Link to="/payment">
          <Button width={"350px"} h="60px" bg={"#4296cb"}>
            PROCEED TO CHECKOUT
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
export default Cart;
