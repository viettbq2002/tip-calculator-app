import { Button } from "@chakra-ui/react";
import { tipPercentAtom } from "../states/shared";
import { useAtom } from "jotai/react";

interface TipButtonProps {
  tipAmount: number;
}
const TipButton = ({ tipAmount }: TipButtonProps) => {
  const [selectedTipPercent, setSelectedTipPercent] = useAtom(tipPercentAtom);
  function handleSelectTipPercent() {
    setSelectedTipPercent(tipAmount);
  }

  return (
    <Button
      isActive={tipAmount === selectedTipPercent}
      onClick={handleSelectTipPercent}
      fontSize="1.3rem"
      w={"100px"}
      bg="hsl(183, 100%, 15%)"
      color="white"
      _active={{ bg: "hsl(172, 67%, 45%)", color: " hsl(183, 100%, 15%)" }}
      _hover={{ bg: "hsl(186, 14%, 43%)" }}
    >
      {tipAmount.toString() + "%"}
    </Button>
  );
};

export default TipButton;
