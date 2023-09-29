import { Box, useMediaQuery } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { allTeamList, teamList1, teamList2, title } from "./constants";
import { TeamProps } from "./model";
import TeamList from "./teamList/teamList";

const Team: React.FC<TeamProps> = ({}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#F9EBBB"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={[
        "60px 20px 0px 20px",
        "60px 30px 0px 30px",
        "120px 60px 120px 60px",
        "120px 80px 120px 80px",
        "120px 80px 120px 80px",
      ]}
    >
      <SectionHeader
        section="team"
        title={title}
        brackets={"[ a safe space for independent spirits ]"}
        hasButton={false}
        isDark={true}
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          w={["100%", "100%", "70%", "70%", "70%"]}
          p={["0px 20px", "0px 40px", "0px 40px", "0px 20px", "0px 20px"]}
          h="auto"
          mt="80px"
        >
          <Box
            w="100%"
            display="flex"
            flexDirection={["column", "column", "row", "row", "row"]}
            gap="50px"
          >
            <TeamList
              teamList={teamList1}
              direction="left"
              classColumn="column-left-scroll"
              classImage="image-column-left"
            />
            <TeamList
              teamList={teamList2}
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

export default Team;
