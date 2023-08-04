import { Box, Button, Heading } from "@chakra-ui/react";
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
      <Box w="100%" h="60vh" bg="primary.500">
        <Heading variant="H1LIGHT" color="egg.200">
          Hi housecolor :)
        </Heading>
        <Button bg="secondary.500" onClick={() => router.push("/")}>
          Navigate
        </Button>
      </Box>
      <Box w="100%" h="360vh" bg="secondary.500">
        <Heading variant="H1LIGHT" color="egg.200">
          Hi housecolor :)
        </Heading>
        <Button bg="secondary.500" onClick={() => router.push("/")}>
          Navigate
        </Button>
      </Box>
    </Box>
  );
};

export default Nosotros;
