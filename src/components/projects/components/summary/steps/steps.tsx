import TextMaskY from "@/components/animations/textY/textY";
import ImageReveal from "@/components/imageReveal/imageReveal";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StepsProps } from "./model";

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <Box
      w="100%"
      h="auto"
      p={[
        "0px 20px 0px 20px",
        "0px 20px 0px 20px",
        "60px 20px 60px 20px",
        "120px 20px 120px 20px",
        "120px 240px 120px 240px",
      ]}
    >
      {steps.map((item: any, i: number) => {
        return (
          <Stack direction="column" spacing="120px" key={i}>
            <Box w="100%" h="auto" pt="120px">
              <Box w="100%">
                <TextMaskY
                  text={[item.number]}
                  variant={[
                    "H7HATTONREGULAR",
                    "H6HATTONREGULAR",
                    "H6HATTONREGULAR",
                    "H5HATTONREGULAR",
                    "H5HATTONREGULAR",
                  ]}
                  delay={0.25}
                  isFooter={false}
                  className=""
                  once
                />
                <Box w="100%" pt={["10px", "20px", "40px", "40px", "40px"]}>
                  <TextMaskY
                    text={[item.title]}
                    variant={[
                      "H7HATTONREGULAR",
                      "H6HATTONREGULAR",
                      "H6HATTONREGULAR",
                      "H5HATTONREGULAR",
                      "H5HATTONREGULAR",
                    ]}
                    delay={0.25}
                    isFooter={false}
                    className=""
                    once
                  />
                </Box>
                <Box w="100%" pt={["40px", "40px", "80px", "80px", "80px"]}>
                  <SimpleGrid
                    w="100%"
                    h="100%"
                    columns={[1, 1, 2, 2, 2]}
                    spacing="40px"
                  >
                    <Box pl="10px" w="100%" borderLeft="1px solid white">
                      <Text variant="MDREGULAR" color="egg.400">
                        Working with the internationally renowned actress Li
                        Meng ( A touch of Sin, Dead Pigs, ...) helped us bring
                        to life the perfect vision of how Madame Wellington Koo
                        would be today.
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
                <Box w="100%" pt="80px">
                  <ImageReveal src={item.image} />
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Steps;
