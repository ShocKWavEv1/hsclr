import { Box, Heading, Show, SimpleGrid, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavbarProps } from "./model";
import circles from "../../../static/logo/double_circles.svg";
import { navigation } from "./constants";
import SlideY from "@/components/animations/slideY/slideY";
import Drawer from "./drawer/drawer";

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  return (
    <Box w="100%" position="absolute" zIndex={3}>
      <SlideY direction={-180} delay={0.25} duration={1}>
        <SimpleGrid
          w="100%"
          h="100%"
          columns={[2, 2, 2, 2]}
          p="30px 40px 0px 40px"
        >
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              w="auto"
              zIndex={2}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              cursor="pointer"
            >
              <Box
                w="35px"
                mt="2px"
                pointerEvents="all"
                cursor="pointer"
                className="link"
                onClick={() => router.push("/")}
              >
                <Image priority src={circles} alt="housecolor logo" />
              </Box>
              <Heading pl="5px" variant="H9SEMIBOLD" color="egg.200">
                house
              </Heading>
              <span>
                <Heading variant="H9LIGHT" color="egg.200">
                  color
                </Heading>
              </span>
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Drawer />
          </Box>
        </SimpleGrid>
      </SlideY>
    </Box>
  );
};

export default Navbar;
