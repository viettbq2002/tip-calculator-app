import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
interface Props {
  icon: string;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputWithIcon: React.FC<Props> = ({ icon, inputChangeHandler }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Image src={icon} />
      </InputLeftElement>

      <Input
      color="hsl(183, 100%, 15%)"
        onChange={(e) => inputChangeHandler(e)}
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
