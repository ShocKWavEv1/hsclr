import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FullManifestoProps } from "./model";

gsap.registerPlugin(ScrollTrigger);

const FullManifesto: React.FC<FullManifestoProps> = ({}) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const elements = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5",
  ];

  useEffect(() => {
    const pin = gsap.fromTo(
      ".belafonte",
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        scrollTrigger: {
          trigger: ".sensacional",
          start: "0px top",
          end: "4000px top",
          scrub: 0.2,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const arr = [1, 2, 3, 4, 5];
  return (
    <Box w="100%">
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <Box ref={sectionRef} className="scroll-section-inner belafonte">
            {elements.map((element, index) => (
              <div key={index} className="scroll-section sensacional">
                <Heading variant="H4HATTONREGULAR" color="licorice.900">
                  {element}
                </Heading>
              </div>
            ))}
          </Box>
        </div>
      </section>
    </Box>
  );
};

export default FullManifesto;
