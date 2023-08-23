import TextMask from "@/components/animations/textMask/textMask";
import { Box } from "@chakra-ui/react";
import { HeroTextProps } from "./model";

const HeroText: React.FC<HeroTextProps> = ({ textMask }) => {
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
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        mt="20px"
      >
        <TextMask text={textMask} variant="H4HATTONREGULAR" delay={0.075} />
      </Box>
    </Box>
  );
};

export default HeroText;
