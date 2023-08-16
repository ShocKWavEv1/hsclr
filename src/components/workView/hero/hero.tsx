import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HeroProps } from "./model";
import SketchWork from "../sketchWork/sketchWork";
import PageHeroSection from "@/components/pageHeroSection/pageHeroSection";

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Box
      w="100%"
      bg="primary.500"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Suspense fallback>
        <SketchWork />
      </Suspense>
      <PageHeroSection text={["We choose a different", "→ starting point."]} />
    </Box>
  );
};

export default Hero;
