import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { SectionHeaderProps } from "./model";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  section,
  title,
  hasButton,
  isDark,
  brackets,
  description,
}) => {
  return (
    <Box
      w="80%"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="row"
    >
      <Stack spacing="60px" direction="row">
        <Box
          w="auto"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <Box pt="15px">
            <TriangleRightIcon color={isDark ? "#FEF8DC" : "#000"} />
          </Box>
          <Text
            variant="XSMEDIUM"
            color={isDark ? "egg.200" : "black"}
            textTransform="lowercase"
            opacity={0.65}
            lineHeight={2.65}
            pl="2px"
            pt="4px"
          >
            {section}
          </Text>
        </Box>
        <Box w="100%" display="flex" flexDirection="column">
          <Heading variant="H7REGULAR" color={isDark ? "egg.200" : "black"}>
            {title}
          </Heading>
          <Text variant="LGREGULAR" color={isDark ? "egg.200" : "black"}>
            {brackets}
          </Text>
          {hasButton && (
            <Box pt="30px">
              <Button colorScheme="primary" size="sm">
                Discover more projects
              </Button>
            </Box>
          )}
          {description &&
            description.map((item: any, i: number) => {
              return (
                <Box w="100%" mt="30px" key={i}>
                  <Text variant="MDREGULAR" color="egg.200">
                    {item}
                  </Text>
                </Box>
              );
            })}
        </Box>
      </Stack>
    </Box>
  );
};

export default SectionHeader;
