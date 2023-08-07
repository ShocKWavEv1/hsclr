import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FullImageProps } from "./model";

const FullImage: React.FC<FullImageProps> = ({ image }) => {
  return (
    <Box w="100%">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Image
          priority
          sizes="100vw"
          width={0}
          height={0}
          src="/static/images/projects/monopo/main.jpg"
          alt="mainImage"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </Box>
  );
};

export default FullImage;
