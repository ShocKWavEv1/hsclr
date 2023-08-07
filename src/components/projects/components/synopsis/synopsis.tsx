import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, Text } from "@chakra-ui/react";
import { descriptions } from "./constants";
import { SynopsisProps } from "./model";

const Synopsis: React.FC<SynopsisProps> = ({ synopsis }) => {
  return (
    <Box w="100%" p="120px 80px 120px 80px">
      <SectionHeader
        section="synopsis"
        title="We choose a different → starting point"
        isDark
        hasButton={false}
        description={descriptions}
      />
    </Box>
  );
};

export default Synopsis;
