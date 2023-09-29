import Footer from "@/components/layout/footer/footer";
import { customCursor, scrollDiscoverText } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HeroServices from "@/components/servicesView/hero/hero";
import ServicesGrid from "@/components/servicesView/servicesGrid/servicesGrid";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";
import Clients from "@/components/clients/clients";
import { useIsTouchDevice } from "@studio-freight/hamo";

const Services: React.FC = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
    scrollDiscoverText();
  }, [isTouchableDevice]);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroServices />
      <ServicesGrid />
      <Clients />
      <Discover />
      <Reel />
      <Footer />
    </Box>
  );
};

export default Services;
