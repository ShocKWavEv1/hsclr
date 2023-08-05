import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { opacity } from "./animation";
import { DrawerButtonProps } from "./model";

const Drawer: React.FC<DrawerButtonProps> = ({ isOpen, setOpen }) => {
  return (
    <Box
      w="auto"
      h="auto"
      p="2px 14px"
      bg="rgba(255,255,255,.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="25em"
      cursor="pointer"
      onClick={() => setOpen()}
    >
      <Box className={`burger ${isOpen ? "burgerActive" : ""}`}></Box>
      <Box pl="10px" className="label" color="egg.200">
        <motion.p
          className="menu-text"
          variants={opacity}
          animate={!isOpen ? "open" : "closed"}
        >
          Menu
        </motion.p>
        <motion.p
          className="menu-text"
          variants={opacity}
          animate={isOpen ? "open" : "closed"}
        >
          Close
        </motion.p>
      </Box>
    </Box>
  );
};

export default Drawer;
