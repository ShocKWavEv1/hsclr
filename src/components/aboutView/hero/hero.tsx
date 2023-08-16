import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HeroProps } from "./model";
import SketchAbout from "../sketchAbout/sketchAbout";
import PageHeroSection from "@/components/pageHeroSection/pageHeroSection";

const HeroAbout: React.FC<HeroProps> = ({}) => {
  return (
    <Box
      w="100%"
      bg="primary.500"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Suspense fallback>
        <SketchAbout />
      </Suspense>
      <PageHeroSection
        text={["We live in the details", "† the details club †"]}
      />
    </Box>
  );
};

export default HeroAbout;
