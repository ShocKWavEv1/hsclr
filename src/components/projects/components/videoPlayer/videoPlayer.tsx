import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { VideoPlayerProps } from "../videoPlayer/model";

const VideoPlayer: React.FC<VideoPlayerProps> = ({}) => {
  const [showFullReel, setShowFullReel] = useState(false);
  const [isLargerThan568] = useMediaQuery("(min-width: 568px)");
  return (
    <Box className="image-gallery" onClick={() => setShowFullReel(true)}>
      <motion.div
        initial={{ opacity: 0, y: isLargerThan568 ? 250 : 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box display={showFullReel ? "none" : "block"}>
          <video
            controls={false}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
          >
            <source
              src="static/media/projects/monopo/monopo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box display={showFullReel ? "block" : "none"}>
          <video
            controls={true}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
          >
            <source
              src="static/media/projects/monopo/monopo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </motion.div>
    </Box>
  );
};

export default VideoPlayer;
