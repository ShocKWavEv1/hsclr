import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { clients } from "./constants";
import { ClientsProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "../animations/textY/textY";

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
        p="120px 40px"
        position="relative"
        className="bg-noise"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
          }}
        >
          <Text variant="SMREGULAR" color="egg.400">
            They trust us
          </Text>
        </motion.div>
        <Box w="680px" pt="50px" textAlign="center">
          <TextMaskY
            text={clients}
            variant="H7HATTONREGULAR"
            className=""
            delay={0.25}
            isFooter={false}
            once
          />
        </Box>
        <Box pt="50px">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
            }}
          >
            <Button size="sm" variant="solid" colorScheme="primary">
              Discover more projects
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
