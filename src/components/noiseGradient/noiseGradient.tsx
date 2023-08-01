import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { NoiseGradientProps } from "./model";
import { extraDescription, textMask } from "./constants";
import HeroFooter from "./heroFooter/heroFooter";
import HeroText from "./heroText/heroText";

const NoiseGradient: React.FC<NoiseGradientProps> = ({}) => {
  return (
    <Box
      className="heroScroll"
      as="section"
      w="100%"
      h="100vh"
      bg="primary.500"
      position="relative"
    >
      <Suspense fallback="loading">
        <iframe
          width="100%"
          height="100%"
          src="https://noise-gradient.vercel.app"
        />
      </Suspense>
      <HeroText textMask={textMask} />
      <HeroFooter options={extraDescription} />
    </Box>
  );
};

export default NoiseGradient;
