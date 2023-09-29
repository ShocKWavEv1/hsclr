import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NoiseGradient from "@/components/noiseGradient/noiseGradient";
import {
  customCursor,
  scrollBackgroundColor,
  scrollColumnImages,
  scrollDiscoverText,
  scrollHeroText,
} from "@/constants/constants";
import ProjectsGrid from "@/components/projectsGrid/projectsGrid";
import Manifesto from "@/components/manifesto/manifesto";
import Clients from "@/components/clients/clients";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";
import Capture from "@/components/capture/capture";
import ParallaxGrid from "@/components/parallaxGrid/parallaxGrid";
import Team from "@/components/team/team";
import Footer from "@/components/layout/footer/footer";
import { useIsTouchDevice } from "@studio-freight/hamo";

export default function Home() {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
    scrollHeroText();
    scrollDiscoverText();
    scrollBackgroundColor();
    scrollColumnImages();
  }, [isTouchableDevice]);

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
      <Footer />
    </Box>
  );
}
