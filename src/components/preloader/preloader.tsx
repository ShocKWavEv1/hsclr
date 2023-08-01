import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { curtain } from "./constants";
import { PreloaderProps } from "./model";
import { motion } from "framer-motion";

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
      <motion.div
        key={"curtain"}
        exit={{ transition: { duration: 1 }, opacity: 0, display: "none" }}
        initial={{ opacity: 0 }}
        animate={{ transition: { delay: 0.3, duration: 1 }, opacity: 1 }}
        style={{ width: "auto", display: "flex" }}
      >
        <Heading variant="H10REGULAR" color="egg.200">
          housecolor | studio
        </Heading>
      </motion.div>
      <motion.div
        key={"curtain"}
        exit={{ transition: { duration: 1 }, opacity: 0, display: "none" }}
        initial={{ opacity: 0 }}
        animate={{ transition: { delay: 0.6, duration: 1 }, opacity: 1 }}
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
