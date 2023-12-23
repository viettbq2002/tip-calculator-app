import { Grid, GridItem } from "@chakra-ui/react";
import TipButton from "./TipButton";
import CustomTipInput from "./CustomTipInput";

export const GridTipButton = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      <GridItem>
        <TipButton tipAmount={5} />
      </GridItem>
      <GridItem>
        <TipButton tipAmount={10} />
      </GridItem>
      <GridItem>
        <TipButton tipAmount={15} />
      </GridItem>
      <GridItem>
        <TipButton tipAmount={25} />
      </GridItem>
      <GridItem>
        <TipButton tipAmount={50} />
      </GridItem>
      <GridItem>
        <CustomTipInput />
      </GridItem>
    </Grid>
  );
};
