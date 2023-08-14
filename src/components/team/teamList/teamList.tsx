import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { TeamListProps } from "./model";

const TeamList: React.FC<TeamListProps> = ({
  classImage,
  classColumn,
  teamList,
  direction,
}) => {
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
        {teamList.map((item: any, i: number) => {
          return (
            <Box
              key={i}
              w="100%"
              h="auto"
              display="flex"
              flexDirection="column"
              className="image-gallery"
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
                      src={`/static/images/team/${item.image}`}
                      alt={"housecolor-projects"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      fill
                    />
                  </Box>
                </Box>
                <Box
                  w="100%"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  flexDirection="column"
                  pt="20px"
                >
                  <Heading variant="H10HATTONMEDIUM" color="egg.200">
                    {item.name}
                  </Heading>
                  <Text
                    py="5px"
                    variant="SMMEDIUM"
                    color="egg.200"
                    opacity={0.75}
                  >
                    {item.role}
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

export default TeamList;
