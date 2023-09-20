import TextMaskY from "@/components/animations/textY/textY";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { PageHeroSectionProps } from "./model";
import arrow_down from "../../static/bg/arrow_scroll.png";
import { motion } from "framer-motion";

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ text }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      as="section"
      w="100%"
      h="100%"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-end"
      flexDirection="column"
      zIndex={2}
      p={[
        "0px 20px 30px 20px",
        "0px 20px 30px 20px",
        "0px 140px 30px 80px",
        "0px 180px 30px 80px",
        "0px 240px 30px 80px",
      ]}
    >
      <TextMaskY
        text={text}
        variant={[
          "H7HATTONREGULAR",
          "H6HATTONREGULAR",
          "H6HATTONREGULAR",
          "H4HATTONREGULAR",
          "H4HATTONREGULAR",
        ]}
        delay={0.25}
        once={true}
        isFooter={false}
        className=""
      />
      {isLargerThan768 && (
        <Box
          cursor="pointer"
          position="absolute"
          bottom={"50px"}
          right={"80px"}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
              delay: 0.45,
            }}
            className="scroll"
          >
            <Image
              src={arrow_down}
              alt="arrow_down"
              style={{ opacity: 0.75, width: 20 }}
            />
          </motion.div>
        </Box>
      )}
    </Box>
  );
};

export default PageHeroSection;
