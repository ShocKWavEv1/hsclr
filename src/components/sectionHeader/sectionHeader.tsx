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
      w={["100%", "100%", "100%", "80%", "80%"]}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="row"
    >
      <Stack
        spacing={["40px", "40px", "40px", "60px", "60px"]}
        direction={["column", "column", "column", "row", "row"]}
      >
        <Box
          w="auto"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <Text
            variant="XSMEDIUM"
            color={isDark ? "egg.400" : "black"}
            textTransform="lowercase"
            opacity={0.65}
          >
            <Text
              as="span"
              variant="XSMEDIUM"
              color={isDark ? "egg.400" : "black"}
              textTransform="lowercase"
              opacity={0.65}
              pr="5px"
            >
              ►
            </Text>
            {section}
          </Text>
        </Box>
        <Box w="100%" display="flex" flexDirection="column">
          <Heading
            variant={[
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
            ]}
            color={isDark ? "egg.400" : "black"}
          >
            {title}
          </Heading>
          <Text
            variant={[
              "SMREGULAR",
              "SMREGULAR",
              "SMREGULAR",
              "MDREGULAR",
              "MDREGULAR",
            ]}
            color={isDark ? "egg.400" : "black"}
            pt="10px"
          >
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
                  <Text variant="MDREGULAR" color="egg.400">
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
