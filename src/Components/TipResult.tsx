import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  billAtom,
  personAtom,
  tipAmountAtom,
  tipPercentAtom,
  totalTipAmountAtom,
} from "../states/shared";

const TipResult = () => {
  const tipAmount = useAtomValue(tipAmountAtom);
  const totalTip = useAtomValue(totalTipAmountAtom);
  const setBill = useSetAtom(billAtom);
  const setTipPercent = useSetAtom(tipPercentAtom);
  const setPerson = useSetAtom(personAtom);
  const handleReset = () => {
    setBill(0);
    setTipPercent(0);
    setPerson(0);
  };
  return (
    <Card p="1rem" color="white" bg="hsl(183, 100%, 15%)">
      <CardBody>
        {/* first result */}
        <Flex gap="7rem" alignItems={"center"} flexDir={"column"}>
          <VStack spacing={"1rem"}>
            <HStack spacing="10rem">
              <VStack spacing="0" alignItems={"flex-start"}>
                <Text>Tip Amount</Text>
                <Text textColor={"hsl(184, 14%, 56%)"} fontSize="0.8rem">
                  / Person
                </Text>
              </VStack>
              <Text fontSize="2.3rem" color={"hsl(172, 67%, 45%)"}>
                ${tipAmount.toFixed(2)}
              </Text>
            </HStack>
            {/* end first result */}
            {/* second result */}

            <HStack spacing="10rem">
              <VStack spacing="0" alignItems={"flex-start"}>
                <Text>Tip Amount</Text>
                <Text textColor={"hsl(184, 14%, 56%)"} fontSize="0.8rem">
                  / Person
                </Text>
              </VStack>
              <Text fontSize="2.3rem" color={"hsl(172, 67%, 45%)"}>
                ${totalTip.toFixed(2)}
              </Text>
            </HStack>
            {/* end result */}
          </VStack>
          <Button
            onClick={handleReset}
            fontSize="1.2rem"
            w={"100%"}
            bg="hsl(172, 67%, 45%)"
          >
            RESET
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TipResult;
