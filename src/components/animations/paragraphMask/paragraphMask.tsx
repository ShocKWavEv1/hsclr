import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParagraphMaskProps } from "./model";

const ParagraphMaskY: React.FC<ParagraphMaskProps> = ({
  text,
  variant,
  delay,
  once,
}) => {
  const phrases = text;
  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: delay * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: once,
  });

  return (
    <Box w="100%" ref={ref}>
      {phrases.map((phrase: any, index: any) => {
        return (
          <Box w="100%" key={index} overflow="hidden">
            <motion.div
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              <Text variant={variant} color="egg.400">
                {phrase}
              </Text>
            </motion.div>
          </Box>
        );
      })}
    </Box>
  );
};

export default ParagraphMaskY;
