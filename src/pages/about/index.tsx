import DetailClub from "@/components/aboutView/detailClub/detailClub";
import FullManifesto from "@/components/aboutView/fullManifesto/fullManifesto";
import HeroAbout from "@/components/aboutView/hero/hero";
import Footer from "@/components/layout/footer/footer";
import { showcaseProjectsList } from "@/components/projectsGrid/constants";
import Reel from "@/components/reel/reel";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import ThumbnailProject from "@/components/workView/thumbnailProject/thumbnailProject";
import {
  customCursor,
  scrollClubDetailsText,
  scrollLiveDetailsText,
} from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    scrollLiveDetailsText();
    scrollClubDetailsText();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroAbout />
      <FullManifesto />
      <DetailClub />
      <Reel />
      <Box
        w="100%"
        p={[
          "60px 20px 100px 20px",
          "60px 30px 100px 30px",
          "120px 60px 40px 60px",
          "120px 80px 40px 80px",
          "120px 80px 40px 80px",
        ]}
      >
        <SectionHeader
          section="work"
          title="Every project is a chance to try something new with a fresh perspective"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Box w="100%" mt={["40px", "50px", "80px", "80px", "80px"]}>
          {showcaseProjectsList.map((item: any, i: number) => {
            return <ThumbnailProject key={i} project={item} />;
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
