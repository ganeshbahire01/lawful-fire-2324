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
const CartCard = ({ img, day, price, id, handelDelet }) => {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w="100%"
      >
        <Image
          objectFit="cover"
          //   maxW={{ base: "60%", sm: "150px" }}
          w="180px"
          h="100px"
          marginTop={"25px"}
          src={img}
          alt="Caffe Latte"
        />
        <Flex w="100%">
          <Stack w="60%">
            <CardBody>
              <Text fontSize={"10px"}>FB PLUS PASS</Text>
              <Heading size="sm">{day}</Heading>

              <Text marginTop={"15px"}>Purchase:</Text>
              <Button variant="solid" w="150px" bg="black" color="white">
                FOR MYSELF
              </Button>
              <Button
                variant="ghost"
                w="150px"
                marginLeft={"15px"}
                border="1px"
              >
                AS A GIFT
              </Button>
            </CardBody>
          </Stack>
          <Stack w="30%">
            <CardBody>
              <Heading size="md" onClick={() => handelDelet(id)}>
                X
              </Heading>
            </CardBody>
          </Stack>
          <Stack>
            <CardBody>
              <Heading size="md">${price}</Heading>
            </CardBody>
          </Stack>
        </Flex>
      </Card>
    </div>
  );
};

export default CartCard;
