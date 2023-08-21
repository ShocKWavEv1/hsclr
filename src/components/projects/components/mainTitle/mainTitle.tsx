import TextMaskY from "@/components/animations/textY/textY";
import { Box, Button } from "@chakra-ui/react";
import { MainTitleProps } from "./model";

const MainTitle: React.FC<MainTitleProps> = ({ title, categories }) => {
  return (
    <Box
      w="100%"
      h="auto"
      bg="black"
      p="240px 80px 60px 80px"
      placeItems="center"
    >
      <TextMaskY
        text={title}
        variant="H2HATTONREGULAR"
        delay={0.45}
        isFooter={false}
        className=""
        once
      />
      <Box w="100%" pt="10px">
        <TextMaskY
          text={categories}
          variant="H10REGULAR"
          delay={0.45}
          isFooter={false}
          className=""
          once
        />
      </Box>
    </Box>
  );
};

export default MainTitle;
