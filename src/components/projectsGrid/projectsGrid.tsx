import { Box, Show, useMediaQuery } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import ColumnImages from "./columnImages/columnImages";
import { allProjects, projectsColumn1, projectsColumn2 } from "./constants";
import { ProjectsGridProps } from "./model";
import { useEffect, useState } from "react";

const ProjectsGrid: React.FC<ProjectsGridProps> = ({}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
      p={[
        "60px 20px 0px 20px",
        "60px 30px 0px 30px",
        "100px 60px 0px 60px",
        "100px 80px 0px 80px",
        "100px 80px 0px 80px",
      ]}
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
        <Box
          w={["100%", "100%", "100%", "70%", "70%"]}
          h="auto"
          mt="80px"
          p={["0px 20px", "0px 40px", "0px 40px", "0px 20px", "0px 20px"]}
        >
          <Box
            w="100%"
            display="flex"
            flexDirection={["column", "column", "row", "row", "row"]}
            gap="50px"
          >
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
