import TextMaskY from "@/components/animations/textY/textY";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SummaryProps } from "./model";

const Summary: React.FC<SummaryProps> = ({}) => {
  return (
    <Box w="100%" h="auto" className="summary-grid">
      <Box w="100%" h="0px" bg="red" />
      <Box w="100%" pb="120px">
        <Box w="100%" pt="120px">
          <TextMaskY
            text={["01"]}
            variant="H1REGULAR"
            delay={0.25}
            isFooter={false}
            className=""
            once
          />
          <Box w="100%" pt="120px">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/static/images/projects/monopo/canada_goose_thumbnail.jpeg"
                alt="nomad"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  backgroundPosition: "fixed",
                }}
                priority
                sizes="100vw"
                width={0}
                height={0}
              />
            </motion.div>
          </Box>
        </Box>
        <Box w="100%" pt="120px">
          <TextMaskY
            text={["02"]}
            variant="H1REGULAR"
            delay={0.25}
            isFooter={false}
            className=""
            once
          />
          <Box w="100%" pt="120px">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/static/images/projects/monopo/img-6.jpg"
                alt="nomad"
                style={{ width: "100%", objectFit: "cover" }}
                priority
                sizes="100vw"
                width={0}
                height={0}
              />
            </motion.div>
          </Box>
        </Box>
        <Box w="100%" pt="120px">
          <TextMaskY
            text={["03"]}
            variant="H1REGULAR"
            delay={0.25}
            isFooter={false}
            className=""
            once
          />
          <Box w="100%" pt="120px">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/static/images/projects/monopo/img-8.jpg"
                alt="nomad"
                style={{ width: "100%", objectFit: "cover" }}
                priority
                sizes="100vw"
                width={0}
                height={0}
              />
            </motion.div>
          </Box>
        </Box>
        <Box w="100%" pt="120px">
          <TextMaskY
            text={["04"]}
            variant="H1REGULAR"
            delay={0.25}
            isFooter={false}
            className=""
            once
          />
          <Box w="100%" pt="120px">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/static/images/projects/monopo/img-19.jpg"
                alt="nomad"
                style={{ width: "100%", objectFit: "cover" }}
                priority
                sizes="100vw"
                width={0}
                height={0}
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="0px" bg="red" />
    </Box>
  );
};

export default Summary;
