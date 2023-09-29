import Footer from "@/components/layout/footer/footer";
import HeroTeam from "@/components/teamView/hero/hero";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";

const Team: React.FC = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroTeam />
      <Box w="100%" h="100vh"></Box>
      <Footer />
    </Box>
  );
};

export default Team;
