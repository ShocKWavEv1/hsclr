import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import SlideY from "../animations/slideY/slideY";
import SectionHeader from "../sectionHeader/sectionHeader";
import ColumnImages from "./columnImages/columnImages";
import { projectsColumn1, projectsColumn2 } from "./constants";
import { ProjectsGridProps } from "./model";

const ProjectsGrid: React.FC<ProjectsGridProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p="100px 80px 0px 80px"
    >
      <SectionHeader
        section="projects"
        title="You are looking for a partner rather than a supplier"
        brackets={"[ working collaboratively towards a shared goal ]"}
        hasButton={false}
        isDark
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box w="70%" h="auto" mt="80px" p="0px 20px">
          <Box w="100%" display="flex" flexDirection="row" gap="50px">
            <ColumnImages
              images={projectsColumn1}
              direction="left"
              classColumn="column-left-scroll"
              classImage="image-column-left"
            />
            <ColumnImages
              images={projectsColumn2}
              direction="right"
              classColumn="column-right-scroll"
              classImage="image-column-right"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsGrid;
