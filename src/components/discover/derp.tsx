/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Heading } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { DiscoverProps } from "./model";

const Discover: React.FC<DiscoverProps> = ({}) => {
  return (
    <Box
      w="100%"
      h="50vh"
      bg="red"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        overflow="hidden"
        whiteSpace="nowrap"
        variant="H1REGULAR"
        color="egg.200"
        className="discover-reel"
      >
        Discover housecolor reel Discover housecolor reel Discover housecolor
        reel Discover housecolor reel Discover housecolor reel Discover
        housecolor reel Discover housecolor reel Discover housecolor reel
      </Heading>
    </Box>
  );
};

export default Discover;
