import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ReelProps } from "./model";

const Reel: React.FC<ReelProps> = ({}) => {
  const [showFullReel, setShowFullReel] = useState(false);
  return (
    <Box className="image-gallery" onClick={() => setShowFullReel(true)}>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
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
            <source src="static/media/reel.mp4" type="video/mp4" />
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
            <source src="static/media/saigon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Reel;
