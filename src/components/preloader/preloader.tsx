import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { curtain, phrases } from "./constants";
import { PreloaderProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "../animations/textY/textY";
import Image from "next/image";
import circles from "../../static/logo/taxo.svg";

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
        flexDirection="column"
      >
        {/*<Box
          w="60px"
          pointerEvents="all"
          cursor="pointer"
          className="link"
          transform="rotate(270deg)"
        >
          <Image priority src={circles} alt="housecolor logo" />
  </Box>*/}
        <Box>
          <TextMaskY
            text={phrases}
            variant={["H10THIN", "H10THIN", "H10THIN", "H10THIN", "H10THIN"]}
            delay={0.25}
            isFooter={false}
            className=""
            once
          />
        </Box>
      </Box>
      <motion.div
        key={"curtain"}
        exit={{
          transition: { duration: 1 },
          opacity: 0,
          y: 0,
          display: "none",
        }}
        initial={{ opacity: 0, y: 0 }}
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
