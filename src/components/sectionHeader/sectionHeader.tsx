import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { SectionHeaderProps } from "./model";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  section,
  title,
  hasButton,
  isDark,
  brackets,
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
            variant="XSBOLD"
            color={isDark ? "egg.200" : "licorice.500"}
            textTransform="lowercase"
            opacity={0.65}
            lineHeight={2.65}
            pl="2px"
          >
            {section}
          </Text>
        </Box>
        <Box w="100%" display="flex" flexDirection="column">
          <Heading
            variant="H7REGULAR"
            color={isDark ? "egg.200" : "licorice.500"}
          >
            {title}
          </Heading>
          <Text variant="LGREGULAR" color={isDark ? "egg.200" : "licorice.500"}>
            {brackets}
          </Text>
          {hasButton && (
            <Box pt="30px">
              <Button colorScheme="primary" size="sm">
                Discover more projects
              </Button>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SectionHeader;
