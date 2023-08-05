import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HeroFooterProps } from "./model";
import scroll from "../../../static/bg/scroll_down.svg";
import SlideY from "@/components/animations/slideY/slideY";
import { motion } from "framer-motion";

const HeroFooter: React.FC<HeroFooterProps> = ({ options }) => {
  return (
    <Box
      as="section"
      w="100%"
      h="auto"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
      textAlign="center"
      zIndex={1}
    >
      <SlideY direction={180} delay={0.25} duration={1}>
        <Box
          w="100%"
          h="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="20px 80px"
        >
          <Box
            w="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 0.75,
              }}
              className="scroll"
            >
              <Box w="80px" className="rotating">
                <Image priority src={scroll} alt="housecolor logo" />
              </Box>
            </motion.div>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="row"
          >
            <Stack spacing="80px" direction="row">
              {options.map((item: any) => {
                return (
                  <Box key={item.title} textAlign="right">
                    <Text variant="SMMEDIUM" color="egg.200">
                      {item.title}
                    </Text>
                    <Text
                      as="span"
                      variant="XSMEDIUM"
                      color="egg.200"
                      opacity={0.75}
                    >
                      {item.label}
                    </Text>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </SlideY>
    </Box>
  );
};

export default HeroFooter;
