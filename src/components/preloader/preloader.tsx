import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { curtain, phrases } from "./constants";
import { PreloaderProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "../animations/textY/textY";

const Preloader: React.FC<PreloaderProps> = () => {
  useEffect(() => {
    curtain();
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="fixed"
      zIndex={10}
      className="preloader"
    >
      <Box
        w="100%"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <TextMaskY
          text={phrases}
          variant="H10REGULAR"
          delay={0.25}
          isFooter={false}
          className=""
          once
        />
      </Box>
      <motion.div
        key={"curtain"}
        exit={{
          transition: { duration: 1 },
          opacity: 0,
          y: 0,
          display: "none",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ transition: { delay: 0.6, duration: 1 }, opacity: 1, y: 0 }}
        style={{ width: "auto", display: "flex" }}
      >
        <Box>
          <span className="loader"></span>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Preloader;
