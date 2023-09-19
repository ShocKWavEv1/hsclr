import FullImage from "@/components/projects/components/fullImage/fullImage";
import MainTitle from "@/components/projects/components/mainTitle/mainTitle";
import Summary from "@/components/projects/components/summary/summary";
import Synopsis from "@/components/projects/components/synopsis/synopsis";
import VideoPlayer from "@/components/projects/components/videoPlayer/videoPlayer";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    customCursor();
  }, []);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={["A song for the dead"]}
        categories={["[ colorgrading - editorial - post production ]"]}
      />
      <VideoPlayer video={""} />
      <Synopsis synopsis={""} />
      <FullImage image={""} />
      <Summary />
    </Box>
  );
};

export default Projects;
