import FullImage from "@/components/projects/components/fullImage/fullImage";
import MainTitle from "@/components/projects/components/mainTitle/mainTitle";
import Summary from "@/components/projects/components/summary/summary";
import Synopsis from "@/components/projects/components/synopsis/synopsis";
import VideoPlayer from "@/components/projects/components/videoPlayer/videoPlayer";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={["A song for the dead"]}
        categories={["[ colorgradong - editorial - post production ]"]}
      />
      <VideoPlayer video={""} />
      <Synopsis synopsis={""} />
      <FullImage image={""} />
      <Summary />
      <VideoPlayer video={""} />
    </Box>
  );
};

export default Projects;
