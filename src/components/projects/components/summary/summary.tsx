import { Box } from "@chakra-ui/react";
import { steps } from "./constants";
import { SummaryProps } from "./model";
import Steps from "./steps/steps";

const Summary: React.FC<SummaryProps> = ({}) => {
  return (
    <Box w="100%" h="auto" className="summary-grid">
      <Box w="100%" h="0px" bg="red" />
      <Steps steps={steps} />
      <Box w="100%" h="0px" bg="red" />
    </Box>
  );
};

export default Summary;
