import { Box } from "@chakra-ui/react";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box w="100vw">{children}</Box>
    </Box>
  );
};

export default Layout;
