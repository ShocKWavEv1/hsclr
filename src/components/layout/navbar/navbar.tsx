import { Box, Heading, Show, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavbarProps } from "./model";
import circles from "../../../static/logo/taxo.svg";
import { navigation } from "./constants";
import SlideY from "@/components/animations/slideY/slideY";
import Drawer from "./drawer/drawer";
import SlideMenu from "./slideMenu/slideMenu";
import { AnimatePresence } from "framer-motion";

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();
  return (
    <Box id="navbar" w="100%" position="absolute" zIndex={3} bg="blue">
      <SlideY direction={-180} delay={0.25} duration={1}>
        <SimpleGrid
          w="100%"
          h="100%"
          columns={[2, 2, 2, 2]}
          p="30px 50px 0px 50px"
          position="absolute"
          zIndex={4}
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
              onClick={() => router.push("/")}
            >
              <Box
                w="60px"
                pointerEvents="all"
                cursor="pointer"
                className="link"
                transform="rotate(270deg)"
                position="absolute"
                top="30px"
              >
                <Image priority src={circles} alt="housecolor logo" />
              </Box>
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            {/*<Show above="xl">
              <Stack spacing="20px" direction="row">
                {navigation.map((item: any) => {
                  return (
                    <Heading
                      key={item.id}
                      variant="H10REGULAR"
                      cursor="pointer"
                      color="egg.200"
                      onClick={() => router.push(item.path)}
                      className="navLink"
                    >
                      {item.label}
                    </Heading>
                  );
                })}
              </Stack>
              </Show>*/}
            <Drawer isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
          </Box>
        </SimpleGrid>
      </SlideY>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <SlideMenu
              links={navigation}
              isOpen={isOpen}
              setOpen={() => setOpen(!isOpen)}
            />
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
