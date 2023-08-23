import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { ImageCardRevealProps } from "./model";

const ImageCardReveal: React.FC<ImageCardRevealProps> = ({
  item,
  height,
  link,
  src,
}) => {
  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      flexDirection="column"
      className="image-gallery"
      onClick={() => router.push(link)}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box
          ref={ref}
          w="100%"
          h={height}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          overflow="hidden"
          position="relative"
        >
          <Box
            w="100%"
            h="100%"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.2)" }}
          >
            <Image
              src={src}
              alt={"housecolor-projects"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            w="100%"
            h="100%"
            bg="lenis"
            position="absolute"
            zIndex={1}
            top={0}
            left={inView ? "100%" : "0%"}
            transition="left 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
          />
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          pt="20px"
        >
          <Heading variant="H10HATTONMEDIUM" color="egg.400">
            {item.title}
          </Heading>
          <Text py="5px" variant="SMMEDIUM" color="egg.400" opacity={0.75}>
            {item.description}
          </Text>
          <Text variant="SMMEDIUM" color="egg.400" opacity={0.75}>
            {item.number}
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ImageCardReveal;
