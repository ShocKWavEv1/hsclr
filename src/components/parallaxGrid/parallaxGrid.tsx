import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import { ParallaxGridProps } from "./model";
import { images } from "./constants";
import ParallaxColumn from "./parallaxColumn/parallaxColumn";

const ParallaxGrid: React.FC<ParallaxGridProps> = ({}) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.55]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.85]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.65]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Box bg="black">
      <Box className="main">
        <Box ref={gallery} className="gallery">
          <Box className="galleryWrapper">
            <ParallaxColumn images={[images[0], images[1], images[2]]} y={y} />
            <ParallaxColumn images={[images[3], images[4], images[5]]} y={y2} />
            <ParallaxColumn images={[images[6], images[7], images[8]]} y={y3} />
            <ParallaxColumn
              images={[images[9], images[10], images[11]]}
              y={y4}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ParallaxGrid;
