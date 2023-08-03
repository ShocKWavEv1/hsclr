import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { title } from "./constants";
import ListCapture from "./listCapture/listCapture";
import { CaptureProps } from "./model";

const Capture: React.FC<CaptureProps> = ({}) => {
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
      p="120px 80px"
      className="bg-noise"
    >
      <SectionHeader
        section="capture"
        title={title}
        brackets={"[ we are design - driven ]"}
        hasButton={false}
        isDark={true}
      />
      <ListCapture />
    </Box>
  );
};

export default Capture;
