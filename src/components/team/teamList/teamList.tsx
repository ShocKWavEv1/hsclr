import ImageCardReveal from "@/components/imageCardReveal/imageCardReveal";
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
      w={["100%", "100%", "50%", "50%", "50%"]}
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
            <ImageCardReveal
              key={i}
              item={item}
              src={item.image}
              link="/team"
              height="auto"
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default TeamList;
