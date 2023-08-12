import { Box, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { translate } from "../../drawer/animation";
import { navLink, socialMedia } from "./constants";
import { MenuFooterProps } from "./model";

const MenuFooter: React.FC<MenuFooterProps> = ({}) => {
  return (
    <Box
      w="100%"
      h="auto"
      bg="black"
      className="nav-shadow"
      p="70px 40px 30px 40px"
      onClick={(e: any) => e.stopPropagation()}
    >
      <Box w="100%" display="flex" flexDirection="row" overflow="hidden">
        <Box
          w="60%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <Stack direction="row" spacing="40px">
            {navLink.map((item: any, i: number) => {
              return (
                <ul key={item.label}>
                  <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Text
                      pl="10px"
                      opacity={0.75}
                      variant="XSMEDIUM"
                      color="egg.200"
                      textTransform="uppercase"
                      overflow="hidden"
                    >
                      {item.label}
                    </Text>
                  </motion.li>
                </ul>
              );
            })}
          </Stack>
        </Box>
        <Box
          w="40%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          flexDirection="row"
        >
          <Stack direction="row" spacing="20px">
            {socialMedia.map((item: any, i: number) => {
              return (
                <ul key={item.name}>
                  <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Box
                      border="1px solid white"
                      p="2px 15px"
                      borderRadius="1vw"
                      color="egg.200"
                      transition=".35s ease-in-out"
                      _hover={{ bg: "egg.200", color: "black" }}
                      cursor="pointer"
                    >
                      <Text pt="4px" opacity={0.75} variant="XSMEDIUM">
                        {item.name}
                      </Text>
                    </Box>
                  </motion.li>
                </ul>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuFooter;
