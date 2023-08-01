import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Nosotros: React.FC = ({}) => {
  const router = useRouter();
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading variant="H1LIGHT" color="egg.200">
        Hi housecolor :)
      </Heading>
      <Button bg="secondary.500" onClick={() => router.push("/")}>
        Navigate
      </Button>
    </Box>
  );
};

export default Nosotros;
