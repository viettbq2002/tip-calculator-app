import { Input } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { tipPercentAtom } from "../states/shared";

const CustomTipInput = () => {
  const setTipPercent = useSetAtom(tipPercentAtom);
  return (
    <Input
      onChange={(e) => setTipPercent(Number(e.target.value))}
      textAlign="right"
      focusBorderColor="hsl(172, 67%, 45%)"
      w={"100px"}
      placeholder="Custom"
    />
  );
};

export default CustomTipInput;
