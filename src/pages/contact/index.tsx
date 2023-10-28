import Footer from "@/components/layout/footer/footer";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import HeroServices from "@/components/servicesView/hero/hero";
import { useIsTouchDevice } from "@studio-freight/hamo";

const Contact: React.FC = () => {
  const videoRef = useRef(null);
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor(videoRef) : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroServices />
      <Box w="100%" h="100vh"></Box>
      <Footer />
    </Box>
  );
};

export default Contact;
