import { Box } from "@chakra-ui/react";
import { steps } from "./constants";
import { SummaryProps } from "./model";
import Steps from "./steps/steps";

const Summary: React.FC<SummaryProps> = ({}) => {
  return (
    <Box w="100%" h="auto">
      <Steps steps={steps} />
    </Box>
  );
};

export default Summary;
