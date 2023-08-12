import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TextYProps } from "./model";

const TextMaskY: React.FC<TextYProps> = ({
  text,
  variant,
  delay,
  className,
  isFooter,
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
              <Heading
                variant={variant}
                color="egg.200"
                className={isFooter && index === 0 ? className : ""}
                mt={isFooter && index !== 0 ? "-10px" : "0px"}
                textDecoration={isFooter && index !== 0 ? "underline" : ""}
              >
                {phrase}
              </Heading>
            </motion.div>
          </Box>
        );
      })}
    </Box>
  );
};

export default TextMaskY;
