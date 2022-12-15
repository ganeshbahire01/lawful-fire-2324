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

const Liupdate = ({data}) => {
  console.log(data);
  return (
    <SimpleGrid
      templateColumns="repeat(4 ,minmax(100px, 1fr))"
      gap="15px"
      marginLeft="60px"
    >
      {data.map((el) => (
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
                <Text fontSize={"12px"} color="blue">
                  {el.p}
                </Text>
                <Heading size="sm">{el.h}</Heading>
              </Stack>
            </CardBody>
            <Text margin={"20px"} fontSize="14px">
              {el.val}
            </Text>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default Liupdate;
