import { Box, Heading } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { ManifestoProps } from "./model";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import ManifestoScroll from "./manifestoScroll/manifestoScroll";

const Manifesto: React.FC<ManifestoProps> = ({}) => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef: any = useRef(null);

  function useArrayRef() {
    const lettersRef: any = useRef<any>();
    lettersRef.current = [];
    return [lettersRef, (ref: any) => ref && lettersRef.current.push(ref)];
  }

  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 80%",
      },
      color: "#FFF",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      p="140px 80px"
      className="bg-noise-manifesto"
    >
      <SectionHeader
        section="manifesto"
        title="Meet our manifesto"
        brackets={"[ blur boundaries of difference ]"}
        hasButton={false}
        isDark
      />
      <ManifestoScroll />
    </Box>
  );
};

export default Manifesto;
