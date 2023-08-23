import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Discover = ({}) => {
  return (
    <Box w="100%" h="auto" pb="50px">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ overflow: "hidden" }}
      >
        <Box className="slider">
          <Heading
            className="text-slider"
            variant="H1HATTONMEDIUM"
            color="egg.400"
          >
            Discover ↔ our ↔ reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔ our ↔
            reel ↔
          </Heading>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Discover;
