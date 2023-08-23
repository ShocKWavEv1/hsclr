import TextMaskY from "@/components/animations/textY/textY";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fullServices } from "./constants";
import { ServicesGridProps } from "./model";

const ServicesGrid: React.FC<ServicesGridProps> = ({}) => {
  return (
    <Box w="100%" p="100px 80px 0px 80px" className="bg-noise">
      <SectionHeader
        section="services"
        title="We help brands be their most inspiring selves. Own their quirks - their edge - their culture"
        brackets={"[ you are looking for a partner rather than a supplier ]"}
        hasButton={false}
        isDark
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mb="120px"
      >
        <Box w="80%" h="auto" mt="80px">
          <SimpleGrid width="100%" columns={[1, 1, 2, 2]} spacing="0px">
            {fullServices.map((item: any, i: number) => {
              return (
                <Box
                  p="60px 40px"
                  w="100%"
                  h="77vh"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  key={item}
                  borderRight={
                    i === 0 || i === 2 || i === 4 ? "1px solid #fff" : ""
                  }
                  borderBottom={i === 4 || i === 5 ? "" : "1px solid #fff"}
                >
                  <Box
                    w="100%"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                  >
                    <TextMaskY
                      text={[item.number]}
                      delay={0.45}
                      once
                      variant="H6HATTONREGULAR"
                      className=""
                      isFooter={false}
                    />
                    <Box pt="20px">
                      <TextMaskY
                        text={[item.title]}
                        delay={0.45}
                        once
                        variant="H6HATTONREGULAR"
                        className=""
                        isFooter={false}
                      />
                    </Box>
                  </Box>
                  <Box
                    w="100%"
                    h="100%"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.75,
                      }}
                    >
                      <Text variant="LGREGULAR" color="egg.400">
                        {item.description}
                      </Text>
                    </motion.div>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesGrid;
