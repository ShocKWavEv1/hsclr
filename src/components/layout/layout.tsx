import { ScrollProvider } from "@/hooks/useLenis";
import { Box } from "@chakra-ui/react";
import Footer from "./footer/footer";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ScrollProvider>
      <Navbar />
      <Box w="100vw">{children}</Box>
      <Footer />
    </ScrollProvider>
  );
};

export default Layout;
