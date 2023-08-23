import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FullImageProps } from "./model";
import ImageReveal from "@/components/imageReveal/imageReveal";

const FullImage: React.FC<FullImageProps> = ({ image }) => {
  return (
    <Box w="100%">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <ImageReveal src="/static/images/projects/monopo/main.jpg" />
      </motion.div>
    </Box>
  );
};

export default FullImage;
