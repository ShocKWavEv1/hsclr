/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Heading } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { DiscoverProps } from "./model";

const Discover: React.FC<DiscoverProps> = ({}) => {
  const firstText: any = useRef(null);
  const secondText: any = useRef(null);
  const slider: any = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="landing">
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Discover our reel -</p>
          <p ref={secondText}>Discover our reel -</p>
        </div>
      </div>
    </main>
  );
};

export default Discover;
