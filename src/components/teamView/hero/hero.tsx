import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HeroProps } from "./model";
import PageHeroSection from "@/components/pageHeroSection/pageHeroSection";
import SketchTeam from "../sketchTeam/sketchTeam";

const HeroTeam: React.FC<HeroProps> = ({}) => {
  return (
    <Box
      w="100%"
      bg="primary.500"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Suspense fallback>
        <SketchTeam />
      </Suspense>
      <PageHeroSection
        text={["We are a collective ↔ for minded & creative talents."]}
      />
    </Box>
  );
};

export default HeroTeam;
