import { Box, Show } from "@chakra-ui/react";
import { Suspense } from "react";
import { NoiseGradientProps } from "./model";
import { extraDescription, textMask } from "./constants";
import HeroFooter from "./heroFooter/heroFooter";
import HeroText from "./heroText/heroText";
import Sketch from "../sketch/sketch";

const NoiseGradient: React.FC<NoiseGradientProps> = ({}) => {
  return (
    <Box
      className="heroScroll"
      as="section"
      w="100%"
      h="100vh"
      bg="black"
      position="relative"
    >
      <Suspense fallback>
        <Sketch />
      </Suspense>
      <HeroText textMask={textMask} />
      <Show above="lg">
        <HeroFooter options={extraDescription} />
      </Show>
    </Box>
  );
};

export default NoiseGradient;
