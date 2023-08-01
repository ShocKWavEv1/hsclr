import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { clients } from "./constants";
import { ClientsProps } from "./model";
import { motion } from "framer-motion";

const Clients: React.FC<ClientsProps> = ({}) => {
  const listClients = clients.join(", ");
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        w="100%"
        h="auto"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        p="80px 40px"
        position="relative"
        className="bg-noise"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >
          <Text variant="XSSEMIBOLD" color="egg.200">
            They trust us
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
        >
          <Box w="600px" pt="50px" textAlign="center">
            <Heading variant="H7REGULAR" color="egg.200">
              {listClients}.
            </Heading>
          </Box>
        </motion.div>
        <Box pt="50px">
          <Button size="sm" variant="solid" colorScheme="primary">
            Discover more projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
