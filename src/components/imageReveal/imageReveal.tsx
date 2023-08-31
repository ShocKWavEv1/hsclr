import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ImageRevealProps } from "./model";

const ImageReveal: React.FC<ImageRevealProps> = ({ src }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={src}
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
      {/*<Box
        w="100%"
        h="100%"
        bg="lenis"
        position="absolute"
        zIndex={1}
        top={0}
        left={inView ? "100%" : "0%"}
        transition="left 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
      />*/}
    </Box>
  );
};

export default ImageReveal;
