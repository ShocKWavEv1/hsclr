import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NoiseGradient from "@/components/noiseGradient/noiseGradient";
import {
  customCursor,
  scrollBackgroundColor,
  scrollColumnImages,
  scrollHeroText,
} from "@/constants/constants";
import Services from "@/components/services/services";
import ProjectsGrid from "@/components/projectsGrid/projectsGrid";
import Manifesto from "@/components/manifesto/manifesto";
import Clients from "@/components/clients/clients";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    customCursor();
    scrollHeroText();
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
      <Box
        data-bgcolor="#000"
        data-textcolor="#FEF8DC"
        w="100%"
        h="100vh"
        bg="hotpink"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading variant="H1LIGHT" color="egg.200">
          Hi housecolor :)
        </Heading>
      </Box>
    </Box>
  );
}
