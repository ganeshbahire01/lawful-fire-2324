import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Text,
  Box,
  Stack,
  Button,
  Image,
  SimpleGrid,
  Heading,
  useDisclosure,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
const PassesCard = ({ img, day, price, id }) => {
  const handelClick = () => {
    let x = JSON.parse(localStorage.getItem("cart")) || [];
    let obj = { id, img, day, price };
    x.push(obj);
    localStorage.setItem("cart", JSON.stringify(x));
    alert("Item Added to Cart Sucessfulyy");
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Text fontSize={"10px"}>FB PLUS PASS</Text>
        <Heading size="md">{day}</Heading>
        <Flex mt="6" spacing="3" gap="50px">
          <Text color="blue.600" fontSize="lg">
            ${price}
          </Text>
          <Button variant="solid" colorScheme="blue" onClick={handelClick}>
            Add to Bag
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PassesCard;
