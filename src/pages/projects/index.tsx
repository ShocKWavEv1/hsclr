import FullImage from "@/components/projects/components/fullImage/fullImage";
import MainTitle from "@/components/projects/components/mainTitle/mainTitle";
import Summary from "@/components/projects/components/summary/summary";
import Synopsis from "@/components/projects/components/synopsis/synopsis";
import VideoPlayer from "@/components/projects/components/videoPlayer/videoPlayer";
import { customCursor } from "@/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import React, { useEffect, useRef } from "react";

const Projects: React.FC = () => {
  const videoRef = useRef(null);

  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor(videoRef) : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={["A song for the dead"]}
        categories={["[ colorgrading - editorial - post production ]"]}
      />
      <VideoPlayer video={""} videoRef={videoRef} />
      <Synopsis synopsis={""} />
      <FullImage image={""} />
      <Summary />
    </Box>
  );
};

export default Projects;
