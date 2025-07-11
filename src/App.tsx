import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RefenceImage from "./components/RefImage";
import Highlights from "./components/Highlights";
import SecondRefenceImage from "./components/SecondRefImage";

// gsap.registerPlugin();
function App() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const gradientBgRef = useRef<HTMLDivElement>(null);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const otherJustRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const justRef = useRef<HTMLDivElement>(null);
  const lensCoverRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !navContainerRef.current ||
      !imageDivRef.current ||
      !gradientBgRef.current ||
      !lensCoverRef.current ||
      !justRef.current ||
      !otherJustRef.current ||
      !headerRef.current ||
      !inputRef.current
    )
      return;

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions || {};
        const tl = gsap.timeline();

        // animate hero container
        tl.fromTo(
          gradientBgRef.current,
          {
            borderRadius: "0px",
            height: "100dvh",
            ease: "power2.out",
          },
          {
            duration: 2,
            borderRadius: "30px",
            height: "85dvh",
          }
        );

        // image div
        tl.fromTo(
          imageDivRef.current,
          {
            transform: "translateY(999px)",
          },
          {
            duration: 0.5,
            transform: "translateY(0px)",
          },
          0.3
        );

        // lensCover animation based on screen size
        if (isMobile) {
          tl.fromTo(
            lensCoverRef.current,
            {
              left: "53%",
              bottom: "29%",
              transform: "translateX(-50%)",
            },
            {
              left: "11%",
              bottom: "22%",
              transform: "translateX(0%)",
              duration: 0.5,
            }
          );
        } else if (isDesktop) {
          tl.fromTo(
            lensCoverRef.current,
            {
              left: "36%",
            },
            {
              left: "10%",
              duration: 0.5,
            }
          );
        }

        // just text animation based on screen size
        if (isMobile) {
          tl.fromTo(
            justRef.current,
            {
              opacity: 0,
              display: "none",
            },
            {
              opacity: 1,
              display: "inline-flex",
              marginRight: "2rem",
            },
            "<"
          );
          tl.fromTo(
            otherJustRef.current,
            {
              opacity: 0,
              display: "none",
            },
            {
              opacity: 1,
              display: "inline-flex",
              marginLeft: "2rem",
            },
            "<"
          );
        } else if (isDesktop) {
          tl.fromTo(
            justRef.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              marginRight: "4rem",
            },
            "<"
          );
          tl.fromTo(
            otherJustRef.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              marginLeft: "8rem",
            },
            "<"
          );
        }

        tl.fromTo(
          navContainerRef.current,
          {
            display: "none",
            opacity: 0,
          },
          {
            display: "flex",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(otherJustRef.current, { opacity: 0 });
              gsap.set(justRef.current, { opacity: 0 });
            },
          },
          4
        );

        tl.fromTo(
          headerRef.current,
          { display: "none", opacity: 0 },
          { duration: 2, display: "block", opacity: 1 },
          "<"
        );

        tl.fromTo(
          inputRef.current,
          { display: "none", opacity: 0 },
          { duration: 2, display: "flex", opacity: 1 },
          "<"
        );
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      <Navbar navContainerRef={navContainerRef} />
      <Hero
        mainContainerRef={mainContainerRef}
        gradientBgRef={gradientBgRef}
        imageDivRef={imageDivRef}
        otherJustRef={otherJustRef}
        justRef={justRef}
        lensCoverRef={lensCoverRef}
        headerRef={headerRef}
        inputRef={inputRef}
      />
      <RefenceImage />
      <SecondRefenceImage />
      <Highlights />
    </>
  );
}

export default App;
