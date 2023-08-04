import { Box } from "@chakra-ui/react";
import Footer from "./footer/footer";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box w="100vw">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
