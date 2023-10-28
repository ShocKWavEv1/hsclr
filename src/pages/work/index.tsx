import Footer from "@/components/layout/footer/footer";
import { allProjectsList } from "@/components/projectsGrid/constants";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import Hero from "@/components/workView/hero/hero";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ThumbnailProject from "@/components/workView/thumbnailProject/thumbnailProject";
import { useIsTouchDevice } from "@studio-freight/hamo";

const Work: React.FC = () => {
  const videoRef = useRef(null);

  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor(videoRef) : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero />
      <Box
        w="100%"
        p={[
          "80px 20px 100px 20px",
          "80px 30px 100px 30px",
          "100px 60px 120px 60px",
          "100px 80px 120px 80px",
          "100px 80px 120px 80px",
        ]}
      >
        <SectionHeader
          section="work"
          title="Every project is a chance to try something new with a fresh perspective"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Box w="100%" pt={["40px", "50px", "80px", "80px", "80px"]}>
          {allProjectsList.map((item: any, i: number) => {
            return <ThumbnailProject key={item.title_1} project={item} />;
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Work;
