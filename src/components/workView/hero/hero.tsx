import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HeroProps } from "./model";
import PageHeroSection from "@/components/pageHeroSection/pageHeroSection";
import SketchWork from "../sketchWork/sketchWork";

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Box
      w="100%"
      bg="black"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Suspense fallback>
        <SketchWork />
      </Suspense>
      <PageHeroSection text={["We choose a different → starting point."]} />
    </Box>
  );
};

export default Hero;
