import { Box, Heading } from "@chakra-ui/react";
import { DetailClubProps } from "./model";

const DetailClub: React.FC<DetailClubProps> = ({}) => {
  return (
    <Box
      w="100%"
      h="auto"
      mt={["40px", "50px", "80px", "80px", "80px"]}
      p={["40px 0px", "50px 0px", "80px 0px", "80px 0px", "80px 0px"]}
      position="relative"
      className="details-section"
    >
      <Box className="slider-manifesto-live">
        <Heading
          className="text-slider-manifesto-live"
          variant={[
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "JUMBOHATTONREGULAR",
            "JUMBOHATTONREGULAR",
          ]}
          color="egg.400"
        >
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
        </Heading>
      </Box>
      <Box className="slider-manifesto-club">
        <Heading
          className="text-slider-manifesto-club"
          variant={[
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "JUMBOHATTONREGULAR",
            "JUMBOHATTONREGULAR",
          ]}
          color="egg.400"
        >
          We ↔ live ↔ in ↔ the ↔ details ↔ We ↔ live ↔ in ↔ the ↔ details ↔ We ↔
          live ↔ in ↔ the ↔ details ↔ We ↔ live ↔ in ↔ the ↔ details ↔
        </Heading>
      </Box>
      <Box className="slider-manifesto-live">
        <Heading
          className="text-slider-manifesto-live-2"
          variant={[
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "H1HATTONREGULAR",
            "JUMBOHATTONREGULAR",
            "JUMBOHATTONREGULAR",
          ]}
          color="egg.400"
        >
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
          The ↔ details ↔ club ↔ The ↔ details ↔ club ↔ The ↔ details ↔ club ↔
        </Heading>
      </Box>
    </Box>
  );
};

export default DetailClub;
