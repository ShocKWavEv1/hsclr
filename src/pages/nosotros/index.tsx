import { hattonStyles } from "@/constants/constants";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Nosotros: React.FC = ({}) => {
  const router = useRouter();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box w="100%" h="50vh" bg="primary.500"></Box>
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
    </Box>
  );
};

export default Nosotros;
