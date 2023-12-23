import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useAtom, useSetAtom } from "jotai";
import "./App.css";
import { GridTipButton } from "./Components/GridTipButton";
import InputWithIcon from "./Components/InputWithIcon";
import TipResult from "./Components/TipResult";
import { billAtom, personAtom } from "./states/shared";
import dollarIcon from "/images/icon-dollar.svg";
import personIcon from "/images/icon-person.svg";
import logo from "/images/logo.svg";

function App() {
  const setBill = useSetAtom(billAtom);
  const [person, setPerson] = useAtom(personAtom);
  const handleChangeBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };
  const handleChangePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(Number(e.target.value));
  };
  return (
    <Container maxW="7xl" pt="3rem" w="100vw" justifyContent={"center"}>
      <VStack spacing="4rem">
        <Image src={logo} />
        <Card p="15px" borderRadius="1rem">
          <CardBody>
            <Flex
              gap="2rem"
              justifyContent="center"
              alignItems="center"
              flexDir={{ base: "column", md: "row" }}
            >
              {/* Left section */}
              <VStack spacing="3rem">
                <FormControl>
                  <FormLabel>Bill</FormLabel>
                  <InputWithIcon
                    inputChangeHandler={handleChangeBill}
                    icon={dollarIcon}
                  />
                </FormControl>
                <Box>
                  <FormLabel>Select Tip %</FormLabel>
                  <GridTipButton />
                </Box>
                <FormControl isInvalid={person === 0}>
                  <Flex justifyContent={"space-between"}>
                    <FormLabel>Number of people</FormLabel>
                    <FormErrorMessage>Can't be Zero</FormErrorMessage>
                  </Flex>
                  <InputWithIcon
                    inputChangeHandler={handleChangePerson}
                    icon={personIcon}
                  />
                </FormControl>
              </VStack>

              {/* End left section */}
              <VStack>
                <TipResult />
              </VStack>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}

export default App;
