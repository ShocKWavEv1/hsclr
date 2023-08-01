import { Box } from "@chakra-ui/react";
import { ReelProps } from "./model";

const Reel: React.FC<ReelProps> = ({}) => {
  return (
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
  );
};

export default Reel;
