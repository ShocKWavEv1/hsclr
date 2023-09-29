import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TextMaskProps } from "./model";

const TextMask: React.FC<TextMaskProps> = ({ text, variant, delay }) => {
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
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <Box w="100%" ref={ref} className="body">
      {phrases.map((phrase: any, index: any) => {
        return (
          <Box key={index} overflow="hidden">
            <motion.div
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              <Heading
                variant={variant}
                color="egg.500"
                className={
                  index === 0
                    ? "translated-text-1"
                    : index === 1
                    ? "translated-text-2"
                    : "translated-text-3"
                }
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

export default TextMask;
