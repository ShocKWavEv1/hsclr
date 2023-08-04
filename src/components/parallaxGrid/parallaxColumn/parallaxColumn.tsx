import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxColumnProps } from "./model";

const ParallaxColumn: React.FC<ParallaxColumnProps> = ({ images, y }) => {
  return (
    <Box bg="black">
      <motion.div className="column" style={{ y }}>
        {images.map((src: any, i: any) => {
          return (
            <Box key={i} className="imageContainer">
              <Image src={`/static/images/${src}`} alt="image" fill />
            </Box>
          );
        })}
      </motion.div>
    </Box>
  );
};

export default ParallaxColumn;
