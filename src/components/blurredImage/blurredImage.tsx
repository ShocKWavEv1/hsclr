import { Box } from "@chakra-ui/react";
import { BlurredImageProps } from "./model";
import Image from "next/image";

const BlurredImage: React.FC<BlurredImageProps> = ({ image }) => {
  return (
    <Box
      w="100%"
      h="100%"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.2)" }}
    >
      <Image
        src={image}
        alt={"housecolor-projects"}
        placeholder="blur"
        blurDataURL=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default BlurredImage;
