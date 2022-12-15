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
const TableData = () => {
  return (
    <div>
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
                Get additional tips and information with a detailed program and
                nutrition guide.
              </Td>
              <Td color={"green"} fontSize="20px">
                <CheckCircleIcon />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
