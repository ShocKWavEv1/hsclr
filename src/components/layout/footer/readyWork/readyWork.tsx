import TextMaskY from "@/components/animations/textY/textY";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReadyWorkProps } from "./model";
import details from "../../../../static/bg/details.svg";
import FooterMedia from "../footerMedia/footerMedia";

const ReadyWork: React.FC<ReadyWorkProps> = ({ text, socialMedia }) => {
  return (
    <Box w="100%">
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box w="80%" h="auto" mt="80px" position="relative">
          <TextMaskY
            text={text}
            variant={"H1BOLDER"}
            className={"stroke-text"}
            delay={0.25}
            isFooter
            once={false}
          />
          <Box
            position="absolute"
            top={"-30%"}
            left={"75%"}
            right={0}
            bottom={0}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 0.85,
              }}
            >
              <Box w="350px" pointerEvents="all" cursor="pointer">
                <Image
                  priority
                  src={details}
                  alt="housecolor logo"
                  style={{ opacity: 0.25 }}
                  className="rotating"
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <FooterMedia socialMedia={socialMedia} />
    </Box>
  );
};

export default ReadyWork;
