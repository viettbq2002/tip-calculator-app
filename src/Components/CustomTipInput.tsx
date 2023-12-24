import { Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { tipPercentAtom } from "../states/shared";

const CustomTipInput = () => {
  const [tipPercent, setTipPercent] = useAtom(tipPercentAtom);
  return (
    <Input
      value={tipPercent === 0 ? "" : tipPercent}
      onChange={(e) => setTipPercent(Number(e.target.value))}
      textAlign="right"
      focusBorderColor="hsl(172, 67%, 45%)"
      w={"100px"}
      placeholder="Custom"
    />
  );
};

export default CustomTipInput;
