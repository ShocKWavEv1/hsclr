import { Box, Stack, Text } from "@chakra-ui/react";
import { DrawerButtonProps } from "./model";

const Drawer: React.FC<DrawerButtonProps> = ({}) => {
  return (
    <Box
      w="auto"
      h="auto"
      p="4px 16px"
      bg="rgba(255,255,255,.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="25em"
    >
      <Text variant="SMREGULAR" cursor="pointer" color="egg.200">
        Menu
      </Text>
      <Box pl="7px" pt="2px" w="auto" display="flex" flexDirection="column">
        <Stack spacing="4px" direction="column">
          <Box w="35px" h="1px" bg="egg.200"></Box>
          <Box w="35px" h="1px" bg="egg.200"></Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Drawer;
