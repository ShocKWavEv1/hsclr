import Footer from "@/components/layout/footer/footer";
import { customCursor, scrollDiscoverText } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HeroServices from "@/components/servicesView/hero/hero";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import ServicesGrid from "@/components/servicesView/servicesGrid/servicesGrid";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";

const Services: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    customCursor();
    scrollDiscoverText();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroServices />
      <ServicesGrid />
      <Discover />
      <Reel />
      <Footer />
    </Box>
  );
};

export default Services;
