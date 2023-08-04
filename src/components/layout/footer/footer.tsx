import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box } from "@chakra-ui/react";
import { FooterProps } from "./model";
import { phrases, socialMedia } from "./constants";
import ReadyWork from "./readyWork/readyWork";

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      p="120px 80px 0px 80px"
      className="bg-noise-manifesto"
    >
      <SectionHeader
        section="contact"
        title={"We would love to hear from you"}
        brackets={"[ keep in touch ]"}
        hasButton={false}
        isDark={true}
      />
      <ReadyWork text={phrases} socialMedia={socialMedia} />
    </Box>
  );
};

export default Footer;
