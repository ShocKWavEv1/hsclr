import gsap from "gsap";

export const phrases = ["housecolor | studio"];
export const curtain = () => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflow: "hidden",
    })
      .to(".preloader .text-container", {
        duration: 1.5,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 1,
        opacity: .70,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 1,
        opacity: .70,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".preloader, .time_container", {
        duration: 1.5,
        opacity: 0,
        ease: "back.out",
      })
      .to(
        "body",
        {
          overflow: "auto",
        },
      )
      .to(".preloader", {
        display: "none",
      });
}