import Footer from "@/components/layout/footer/footer";
import { allProjectsList } from "@/components/projectsGrid/constants";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import Hero from "@/components/workView/hero/hero";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import ThumbnailProject from "@/components/workView/thumbnailProject/thumbnailProject";

const Work: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    customCursor();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero />
      <Box w="100%" p="100px 80px 0px 80px">
        <SectionHeader
          section="work"
          title="Every project is a chance to try something new with a fresh perspective"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Box w="100%" mt="80px">
          {allProjectsList.map((item: any, i: number) => {
            return <ThumbnailProject key={i} project={item} />;
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Work;
