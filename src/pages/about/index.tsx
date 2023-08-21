import FullManifesto from "@/components/aboutView/fullManifesto/fullManifesto";
import HeroAbout from "@/components/aboutView/hero/hero";
import Footer from "@/components/layout/footer/footer";
import { customCursor, hattonStyles } from "@/constants/constants";
import { Box, Heading, Stack } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
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
    window.scroll({ top: 0 });
    customCursor();
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
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

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <HeroAbout />
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
      <Box p="80px 40px" w="100%" h="auto" bg="black" display="flex">
        <Stack direction="column" spacing="40px">
          {hattonStyles.map((item: any, i: number) => {
            return (
              <Heading key={i} variant={item.variant} color="primary.500">
                A song for the dead
              </Heading>
            );
          })}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
