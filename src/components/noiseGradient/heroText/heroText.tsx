import TextMask from "@/components/animations/textMask/textMask";
import { Box, Heading, Show, useMediaQuery } from "@chakra-ui/react";
import { HeroTextProps } from "./model";

const HeroText: React.FC<HeroTextProps> = ({ textMask }) => {
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
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      zIndex={2}
    >
      <Box
        p={[
          "60px 20px 0px 20px",
          "0px 20px 0px 20px",
          "0px 120px 0px 120px",
          "0px 120px 0px 120px",
          "0px 120px 0px 120px",
        ]}
        w="100%"
        display={isLargerThan768 ? "none" : "flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="left"
      >
        <Heading
          variant={[
            "H6HATTONREGULAR",
            "H6HATTONREGULAR",
            "H4HATTONREGULAR",
            "H4HATTONREGULAR",
            "H4HATTONREGULAR",
          ]}
          color="egg.400"
        >
          We are a creative post production studio obsessed with color grading
          and excellence
        </Heading>
      </Box>
      <Box
        w="100%"
        h="100%"
        display={isLargerThan768 ? "flex" : "none"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <TextMask
          text={textMask}
          variant={[
            "H6HATTONREGULAR",
            "H6HATTONREGULAR",
            "H5HATTONREGULAR",
            "H4HATTONREGULAR",
            "H4HATTONREGULAR",
          ]}
          delay={0.075}
        />
      </Box>
    </Box>
  );
};

export default HeroText;
