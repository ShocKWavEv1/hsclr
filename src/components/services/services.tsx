import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { services, title } from "./constants";
import { ServicesProps } from "./model";
import ProductServices from "./productServices/productServices";

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#FEFCED"
      data-textcolor="#000"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p="0px 80px"
    >
      <SectionHeader
        section="services"
        title={title}
        hasButton
        isDark={false}
      />
      <ProductServices products={services} />
    </Box>
  );
};

export default Services;
