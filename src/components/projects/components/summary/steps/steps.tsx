import TextMaskY from "@/components/animations/textY/textY";
import ImageReveal from "@/components/imageReveal/imageReveal";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StepsProps } from "./model";

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <Box w="100%" pb="240px">
      {steps.map((item: any, i: number) => {
        return (
          <Box w="100%" pt="240px" key={i}>
            <Box w="100%" px="120px">
              <TextMaskY
                text={[item.number]}
                variant="H5HATTONREGULAR"
                delay={0.25}
                isFooter={false}
                className=""
                once
              />
              <Box w="100%" pt="40px">
                <TextMaskY
                  text={[item.title]}
                  variant="H3HATTONREGULAR"
                  delay={0.25}
                  isFooter={false}
                  className=""
                  once
                />
              </Box>
              <Box w="100%" pt="80px">
                <SimpleGrid
                  w="100%"
                  h="100%"
                  columns={[2, 2, 2, 2]}
                  spacing="40px"
                >
                  <Box pl="10px" w="100%" borderLeft="1px solid white">
                    <Text variant="MDREGULAR" color="egg.400">
                      Working with the internationally renowned actress Li Meng
                      ( A touch of Sin, Dead Pigs, ...) helped us bring to life
                      the perfect vision of how Madame Wellington Koo would be
                      today.
                    </Text>
                  </Box>
                  <Box pl="10px" w="100%" borderLeft="1px solid white">
                    <Text variant="MDREGULAR" color="egg.400">
                      Due to geographic differences, we had to manage two
                      different shoots in Shanghai, where the actress located
                      and London
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
            <Box w="100%" pt="80px">
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <ImageReveal src={item.image} />
              </motion.div>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Steps;
