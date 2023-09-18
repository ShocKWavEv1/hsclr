import ImageCardReveal from "@/components/imageCardReveal/imageCardReveal";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ColumnImagesProps } from "./model";

const ColumnImages: React.FC<ColumnImagesProps> = ({
  classImage,
  classColumn,
  images,
  direction,
}) => {
  return (
    <Box
      w={["100%", "100%", "100%", "50%", "50%"]}
      pt={direction === "right" ? "100px" : "0px"}
      display="flex"
      flexDirection="column"
      className={classImage}
    >
      <SimpleGrid
        w="100%"
        h="auto"
        columns={[1, 1, 1, 1]}
        spacingY="80px"
        className={classColumn}
      >
        {images.map((item: any, i: number) => {
          return (
            <ImageCardReveal
              key={i}
              item={item}
              src={item.img}
              link="/projects"
              height="auto"
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ColumnImages;
