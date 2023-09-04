import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HeroServicesProps } from "./model";
import PageHeroSection from "@/components/pageHeroSection/pageHeroSection";
import SketchServices from "../sketchServices/sketchServices";

const HeroServices: React.FC<HeroServicesProps> = ({}) => {
  return (
    <Box
      w="100%"
      bg="primary.500"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Suspense fallback>
        <SketchServices />
      </Suspense>
      <PageHeroSection
        text={["We build brands across", "branding & communications"]}
      />
    </Box>
  );
};

export default HeroServices;
