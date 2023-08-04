import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const Discover = ({}) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
  }, []);

  const handleScroll = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.25 * direction;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="landing">
      <Box className="sliderContainer">
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Box ref={slider} className="slider">
            <p ref={firstText}>discover ↔ our ↔ reel ↔</p>
            <p ref={secondText}>discover ↔ our ↔ reel ↔</p>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Discover;
