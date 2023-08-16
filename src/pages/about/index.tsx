import HeroAbout from "@/components/aboutView/hero/hero";
import Footer from "@/components/layout/footer/footer";
import { customCursor, hattonStyles } from "@/constants/constants";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
    customCursor();
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroAbout />
      <Box p="80px 40px" w="100%" h="auto" bg="black" display="flex">
        <Stack direction="column" spacing="40px">
          {hattonStyles.map((item: any, i: number) => {
            return (
              <Heading key={i} variant={item.variant} color="primary.500">
                A song for the dead
              </Heading>
            );
          })}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
