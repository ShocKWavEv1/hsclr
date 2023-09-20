import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollBackgroundColor = () => {
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

export const scrollDiscoverText = () => {
  const textElement1 = document.querySelectorAll(".text-slider");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -600,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "center center",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const scrollLiveDetailsText = () => {
  const textElement1 = document.querySelectorAll(".text-slider-manifesto-live");
  const textElement2 = document.querySelectorAll(".text-slider-manifesto-live-2");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -270,
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
      xPercent: -350,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const scrollClubDetailsText = () => {
  const textElement1 = document.querySelectorAll(".text-slider-manifesto-club");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: 40,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
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

export const hattonStyles = [
  {variant: "H1HATTONLIGHT"},
  {variant: "H1HATTONREGULAR"},
  {variant: "H1HATTONMEDIUM"},
  {variant: "H1HATTONBOLD"},
  {variant: "H1HATTONBOLDER"},

  {variant: "H2HATTONLIGHT"},
  {variant: "H2HATTONREGULAR"},
  {variant: "H2HATTONMEDIUM"},
  {variant: "H2HATTONBOLD"},
  {variant: "H2HATTONBOLDER"},

  {variant: "H3HATTONLIGHT"},
  {variant: "H3HATTONREGULAR"},
  {variant: "H3HATTONMEDIUM"},
  {variant: "H3HATTONBOLD"},
  {variant: "H3HATTONBOLDER"},

  {variant: "H4HATTONLIGHT"},
  {variant: "H4HATTONREGULAR"},
  {variant: "H4HATTONMEDIUM"},
  {variant: "H4HATTONBOLD"},
  {variant: "H4HATTONBOLDER"},

  {variant: "H5HATTONLIGHT"},
  {variant: "H5HATTONREGULAR"},
  {variant: "H5HATTONMEDIUM"},
  {variant: "H5HATTONBOLD"},
  {variant: "H5HATTONBOLDER"},

  {variant: "H6HATTONLIGHT"},
  {variant: "H6HATTONREGULAR"},
  {variant: "H6HATTONMEDIUM"},
  {variant: "H6HATTONBOLD"},
  {variant: "H6HATTONBOLDER"},

  {variant: "H7HATTONLIGHT"},
  {variant: "H7HATTONREGULAR"},
  {variant: "H7HATTONMEDIUM"},
  {variant: "H7HATTONBOLD"},
  {variant: "H7HATTONBOLDER"},

  {variant: "H8HATTONLIGHT"},
  {variant: "H8HATTONREGULAR"},
  {variant: "H8HATTONMEDIUM"},
  {variant: "H8HATTONBOLD"},
  {variant: "H8HATTONBOLDER"},

  {variant: "H9HATTONLIGHT"},
  {variant: "H9HATTONREGULAR"},
  {variant: "H9HATTONMEDIUM"},
  {variant: "H9HATTONBOLD"},
  {variant: "H9HATTONBOLDER"},

  {variant: "H10HATTONLIGHT"},
  {variant: "H10HATTONREGULAR"},
  {variant: "H10HATTONMEDIUM"},
  {variant: "H10HATTONBOLD"},
  {variant: "H10HATTONBOLDER"},
]