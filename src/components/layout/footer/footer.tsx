import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box } from "@chakra-ui/react";
import { FooterProps } from "./model";

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#FEFCED"
      data-textcolor="#000"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      p="120px 80px"
    >
      <SectionHeader
        section="contact"
        title={"Keep in touch"}
        hasButton
        isDark={false}
      />
    </Box>
  );
};

export default Footer;
