import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap-trial/dist/SplitText";

export const scrollBackgroundColor = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let mySplitText = new SplitText(".split", { type: "chars" });
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: 130,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".split",
      start: "top 80%",
    },
  });

  const sections = document.querySelectorAll("section");
  const body = document.body;
  const colors = Array.from(sections).map((section) => ({
    bgColor: section.dataset.bgcolor,
    textColor: section.dataset.textcolor,
  }));

  const changeBackgroundColor = (index: any) => {
    const { bgColor, textColor } = colors[index];
    gsap.to(body, {
      backgroundColor: bgColor,
      color: textColor,
      overwrite: "auto",
    });
  };

  sections.forEach((section, index) => {
    const nextSection = sections[index + 1];

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      endTrigger: nextSection,
      end: "bottom center",
      onEnter: () => changeBackgroundColor(index),
      onLeaveBack: () => changeBackgroundColor(index - 1),
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

export const scrollHeroText = () => {
  const textElement1 = document.querySelectorAll(".translated-text-1");
  const textElement2 = document.querySelectorAll(".translated-text-2");
  const textElement3 = document.querySelectorAll(".translated-text-3");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -200,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    textElement2,
    { xPercent: 0 },
    {
      xPercent: 270,
      //skewX: -150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    textElement3,
    { xPercent: 0 },
    {
      xPercent: -50,
      //skewX: 100,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const scrollDiscoverReelText = () => {
  const textElement1 = document.querySelectorAll(".discover-reel");

  const tl = gsap.timeline({ paused: true });

  // Define the animation you want to perform
  tl.to(textElement1, {
    xPercent: -50, // Move the text 100% to the right (it will move out of the screen)
    opacity: 1,
    duration: 0.2,
  });

  // Set up the ScrollTrigger
  ScrollTrigger.create({
    trigger: textElement1, // Element to trigger the animation
    start: 'top top', // Trigger point, adjust as needed
    end: 'bottom bottom', // End point, adjust as needed
    animation: tl, // Pass the timeline to the ScrollTrigger
    toggleActions: 'play none none play', // Play the animation once and don't reverse it
    scrub: true, // Enable smooth scrolling effect
  });
};

export const scrollColumnImages = () => {
  //const columnLeftScroll = document.querySelector(".column-left-scroll");
  const columnRightScroll = document.querySelector(".column-right-scroll");

  /*gsap.fromTo(
    columnLeftScroll,
    { yPercent: 0 },
    {
      yPercent: 1,
      scrollTrigger: {
        trigger: ".image-column-left",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );*/

  gsap.fromTo(
    columnRightScroll,
    { yPercent: 0 },
    {
      yPercent: -10,
      scrollTrigger: {
        trigger: ".image-column-right",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const customCursor = () => {
  const cursor: any = document.getElementById("custom-cursor");
  const links: any = document.querySelectorAll(
    ".image-gallery, .video-reel"
  );
  const cursorText: any = document.querySelector(".cursor-text");

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    gsap.to(cursor, { x: clientX, y: clientY });
  };

  const onMouseEnterLink = (event: any) => {
    const link = event.target;
    if (link.classList.contains("View")) {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.style.display = "block";
    } else {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.style.display = "block";
    }
  };

  const onMouseLeaveLink = () => {
    gsap.to(cursor, { width: 15, height: 15, cursor: "pointer" });
    cursorText.style.display = "none";
  };

  document.addEventListener("mousemove", onMouseMove);

  links.forEach((link: any) => {
    link.addEventListener("mouseenter", onMouseEnterLink);
    link.addEventListener("mouseleave", onMouseLeaveLink);
  });
}

export const headersStyle = [
  { variant: "H1BOLDER" },
  { variant: "H1BOLD" },
  { variant: "H1SEMIBOLD" },
  { variant: "H1MEDIUM" },
  { variant: "H1REGULAR" },
  { variant: "H1LIGHT" },

  { variant: "H2BOLDER" },
  { variant: "H2BOLD" },
  { variant: "H2SEMIBOLD" },
  { variant: "H2MEDIUM" },
  { variant: "H2REGULAR" },
  { variant: "H2LIGHT" },

  { variant: "H3BOLDER" },
  { variant: "H3BOLD" },
  { variant: "H3SEMIBOLD" },
  { variant: "H3MEDIUM" },
  { variant: "H3REGULAR" },
  { variant: "H3LIGHT" },

  { variant: "H4BOLDER" },
  { variant: "H4BOLD" },
  { variant: "H4SEMIBOLD" },
  { variant: "H4MEDIUM" },
  { variant: "H4REGULAR" },
  { variant: "H4LIGHT" },

  { variant: "H5BOLDER" },
  { variant: "H5BOLD" },
  { variant: "H5SEMIBOLD" },
  { variant: "H5MEDIUM" },
  { variant: "H5REGULAR" },
  { variant: "H5LIGHT" },

  { variant: "H6BOLDER" },
  { variant: "H6BOLD" },
  { variant: "H6SEMIBOLD" },
  { variant: "H6MEDIUM" },
  { variant: "H6REGULAR" },
  { variant: "H6LIGHT" },

  { variant: "H7BOLDER" },
  { variant: "H7BOLD" },
  { variant: "H7SEMIBOLD" },
  { variant: "H7MEDIUM" },
  { variant: "H7REGULAR" },
  { variant: "H7LIGHT" },

  { variant: "H8BOLDER" },
  { variant: "H8BOLD" },
  { variant: "H8SEMIBOLD" },
  { variant: "H8MEDIUM" },
  { variant: "H8REGULAR" },
  { variant: "H8LIGHT" },

  { variant: "H9BOLDER" },
  { variant: "H9BOLD" },
  { variant: "H9SEMIBOLD" },
  { variant: "H9MEDIUM" },
  { variant: "H9REGULAR" },
  { variant: "H9LIGHT" },
];