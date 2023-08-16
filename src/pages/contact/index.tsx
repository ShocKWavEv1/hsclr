import Footer from "@/components/layout/footer/footer";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HeroServices from "@/components/servicesView/hero/hero";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    customCursor();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroServices />
      <Box w="100%" h="100vh"></Box>
      <Footer />
    </Box>
  );
};

export default Contact;
