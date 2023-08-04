import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FooterMediaProps } from "./model";
import circles from "../../../../static/logo/double_circles.svg";

const FooterMedia: React.FC<FooterMediaProps> = ({ socialMedia }) => {
  return (
    <Box w="100%" h="auto" mt="100px">
      <SimpleGrid w="100%" h="100%" columns={[2, 2, 2, 2]} p="30px 0px">
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
            <Box w="40px" pointerEvents="all" cursor="pointer" className="link">
              <Image priority src={circles} alt="housecolor logo" />
            </Box>
            <Text pl="10px" opacity={0.75} variant="SMREGULAR" color="egg.200">
              MMXXII - housecolor
            </Text>
          </Box>
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Stack direction="row" spacing="20px">
            {socialMedia.map((item: any, i: number) => {
              return (
                <Box
                  key={item.name}
                  border="1px solid white"
                  p="2px 15px"
                  borderRadius="1vw"
                  color="egg.200"
                  transition=".35s ease-in-out"
                  _hover={{ bg: "egg.200", color: "black" }}
                  cursor="pointer"
                >
                  <Text opacity={0.75} variant="SMREGULAR">
                    {item.name}
                  </Text>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FooterMedia;
