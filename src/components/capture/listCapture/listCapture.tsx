import { Box, Button, Text } from "@chakra-ui/react";
import { ListCaptureProps } from "./model";
import { motion } from "framer-motion";

const ListCapture: React.FC<ListCaptureProps> = ({}) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box w="80%" h="auto" mt="40px">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Text variant="LGREGULAR" color="egg.200">
            We start where others stop. We question the norm. We don’t repeat
            what has been done.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Text pt="40px" variant="LGREGULAR" color="egg.200">
            United as friends. Unbound by tradition. The best teams are
            independent spirits working in harmony. We start where others stop.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <Box pt="40px">
            <Button
              variant="solid"
              bg="white"
              borderColor="white"
              size="xs"
              color="black"
            >
              Our services →
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ListCapture;
