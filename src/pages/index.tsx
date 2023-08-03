import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NoiseGradient from "@/components/noiseGradient/noiseGradient";
import {
  customCursor,
  scrollBackgroundColor,
  scrollColumnImages,
  scrollDiscoverReelText,
  scrollHeroText,
} from "@/constants/constants";
import Services from "@/components/services/services";
import ProjectsGrid from "@/components/projectsGrid/projectsGrid";
import Manifesto from "@/components/manifesto/manifesto";
import Clients from "@/components/clients/clients";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";
import Capture from "@/components/capture/capture";
import ParallaxGrid from "@/components/parallaxGrid/parallaxGrid";
import Team from "@/components/team/team";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    customCursor();
    scrollHeroText();
    scrollDiscoverReelText();
    scrollBackgroundColor();
    scrollColumnImages();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <NoiseGradient />
      <ProjectsGrid />
      <Clients />
      <Manifesto />
      <Discover />
      <Reel />
      <Capture />
      <ParallaxGrid />
      <Team />
    </Box>
  );
}
