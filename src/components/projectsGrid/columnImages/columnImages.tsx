import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { ColumnImagesProps } from "./model";

const ColumnImages: React.FC<ColumnImagesProps> = ({
  classImage,
  classColumn,
  images,
  direction,
}) => {
  const router = useRouter();
  return (
    <Box
      w="50%"
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
            <Box
              key={i}
              w="100%"
              h="auto"
              display="flex"
              flexDirection="column"
              className="image-gallery"
              onClick={() => router.push("/projects")}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Box
                  key={i}
                  w="100%"
                  h="72vh"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  overflow="hidden"
                  position="relative"
                  borderRadius="1vw"
                >
                  <Box
                    w="100%"
                    h="100%"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.2)" }}
                  >
                    <Image
                      src={item.img}
                      alt={"housecolor-projects"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  w="100%"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  flexDirection="column"
                  pt="10px"
                >
                  <Text variant="MDMEDIUM" color="egg.200">
                    {item.title}
                  </Text>
                  <Text
                    py="3px"
                    variant="SMMEDIUM"
                    color="egg.200"
                    opacity={0.75}
                  >
                    {item.description}
                  </Text>
                  <Text variant="SMMEDIUM" color="egg.200" opacity={0.75}>
                    {item.number}
                  </Text>
                </Box>
              </motion.div>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ColumnImages;
