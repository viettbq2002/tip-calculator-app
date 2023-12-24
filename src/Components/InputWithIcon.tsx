import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import React from "react";
import { isInputChangeAtom } from "../states/shared";
interface Props {
  icon: string;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: number;
}
const InputWithIcon: React.FC<Props> = ({
  icon,
  inputChangeHandler,
  inputValue,
}) => {
  const setIsInputChange = useSetAtom(isInputChangeAtom);
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Image src={icon} />
      </InputLeftElement>

      <Input
        value={inputValue === 0 ? "" : inputValue}
        color="hsl(183, 100%, 15%)"
        onChange={(e) => {
          inputChangeHandler(e);
          setIsInputChange(true);
        }}
        fontSize="1.5rem"
        textAlign="right"
        focusBorderColor="hsl(172, 67%, 45%)"
        type="number"
        placeholder="0"
      />
    </InputGroup>
  );
};

export default InputWithIcon;
