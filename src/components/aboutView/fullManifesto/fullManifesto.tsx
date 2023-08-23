import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { fullManifestoSteps } from "./constants";
import { FullManifestoProps } from "./model";

const FullManifesto: React.FC<FullManifestoProps> = ({}) => {
  return (
    <Box w="100%" p="100px 80px 0px 80px" className="bg-noise">
      <SectionHeader
        section="about"
        title=""
        brackets=""
        hasButton={false}
        isDark
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box w="80%" h="auto" mt="80px" className="split">
          <Heading variant="H5HATTONREGULAR" color="egg.400">
            Allow us to be the cool part of your next project
          </Heading>
          <Text pt="40px" variant="XXLREGULAR" color="egg.400">
            Housecolor is a Mexican creative studio imagined by Rodrigo Salmerón
            and Baruc Narvaez. We help brands that do good Tambiéns logo on a
            flag stand out and find their people by providing a full creative
            service, videos and courses. We help brands be their most inspiring
            selves. Own their quirks - their edge - their culture. Help them be
            confidently attractive. At home, and abroad.
          </Text>
          <Box pt="80px">
            <Heading variant="H7HATTONREGULAR" color="egg.400">
              - More than a statement. This is our manfesto
            </Heading>
            <Text variant="MDREGULAR" color="egg.400">
              {`[ siguiendo estos principios, desarrollamos las mejores estrategias digitales ]`}
            </Text>
          </Box>
          <Box w="100%" mt="80px">
            <SimpleGrid w="100%" h="100%" columns={[1, 1, 2, 3]}>
              {fullManifestoSteps.map((item: any, i: number) => {
                return (
                  <Box
                    key={i}
                    w="100%"
                    h="auto"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    p="40px"
                    borderBottom={
                      i === 0 || i === 1 || i === 2 ? `1px solid #F9EBBB` : ""
                    }
                    borderRight={
                      i === 0 || i === 1 || i === 3 || i === 4
                        ? "1px solid #F9EBBB"
                        : ""
                    }
                  >
                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      flexDirection="column"
                    >
                      <Box
                        w="100%"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        flexDirection="column"
                      >
                        <Heading variant="H8HATTONREGULAR" color="egg.400">
                          {item.number}
                        </Heading>
                        <Heading
                          pt="20px"
                          variant="H8HATTONREGULAR"
                          color="egg.400"
                        >
                          {item.title}
                        </Heading>
                      </Box>
                    </Box>
                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Text pt="80px" variant="MDREGULAR" color="egg.400">
                        {item.description}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FullManifesto;

{
  /*

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
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
    }; <Box w="100%">
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <Box w="100%" p="100px 80px 0px 80px">
            <SectionHeader
              section="about"
              title="It´s more than a statement. This is our manifesto"
              brackets="[ we do many things just well ]"
              hasButton={false}
              isDark
            />
          </Box>
          <Box
            ref={sectionRef}
            mt="80px"
            className="scroll-section-inner belafonte"
          >
            {fullManifestoSteps.map((item, index) => (
              <div key={index} className="scroll-section sensacional">
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  p="0px 80px 0px 80px"
                >
                  <Box w="80%" h="auto">
                    <SimpleGrid
                      w="100%"
                      h="100%"
                      columns={[1, 1, 2, 2]}
                      spacing="20px"
                    >
                      <Box
                        w="100%"
                        h="100%"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        flexDirection="column"
                        p="60px"
                      >
                        <TextMaskY
                          text={[item.title]}
                          variant="H8HATTONREGULAR"
                          once
                          delay={0.45}
                          className=""
                          isFooter={false}
                        />
                        <Box pt="20px">
                          <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                          >
                            <Text variant="SMREGULAR" color="egg.200">
                              {item.description}
                            </Text>
                          </motion.div>
                        </Box>
                      </Box>
                      <Box w="100%" h="100%">
                        <Box
                          w="100%"
                          h="100%"
                          display="flex"
                          placeContent="center"
                          className="manifesto"
                        >
                          <video
                            controls={false}
                            autoPlay={true}
                            loop={true}
                            playsInline={true}
                            muted
                            width="100%"
                            height="100%"
                          >
                            <source
                              src="static/media/manifesto.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </div>
      </section>
            </Box> */
}
