import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RefenceImage from "./components/RefImage";

// gsap.registerPlugin();
function App() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const gradientBgRef = useRef<HTMLDivElement>(null);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const otherJustRef = useRef<HTMLDivElement>(null);
  const justRef = useRef<HTMLDivElement>(null);
  const lensCoverRef = useRef<HTMLImageElement>(null);
  const tl = gsap.timeline({
    onStart: () => console.log("Timeline started"),
    onUpdate: () => console.log("Timeline updating"),
    onComplete: () => {
      console.log("completed");
    },
  });

  useEffect(() => {
    if (
      // !mainContainerRef.current ||
      !navContainerRef.current ||
      !imageDivRef.current
    )
      return;

    // animate hero containaner
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
      // start 0.3 seconds after the timeline
      0.3
    );
    // image conver
    tl.fromTo(
      lensCoverRef.current,
      {
        left: "38%",
      },
      { left: "8%" }
    );
    tl.fromTo(
      justRef.current,
      {
        opacity: 0,
      },
      {
        // duration: 1.6,
        opacity: 1,
      },
      0.4
    );
    tl.fromTo(
      otherJustRef.current,
      {
        opacity: 0,
      },
      {
        // duration: 1,
        opacity: 1,
        marginLeft: "8rem",
      },
      1
    );
    tl.fromTo(
      navContainerRef.current,
      {
        // FROM state
        display: "none",
        opacity: 0,
      },
      {
        // TO state
        display: "flex",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          // Use GSAP to animate just text opacity back to 0
          gsap.set(otherJustRef.current, { opacity: 0 });
          gsap.set(justRef.current, { opacity: 0 });
        },
      },
      // start seconds after the timeline
      4
    );
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
      />
      {/* <RefenceImage /> */}
    </>
  );
}

export default App;

// tl.fromTo(
//   mainContainerRef.current,
//   {
//     paddingTop: "0px",
//     paddingRight: "0px",
//     paddingBottom: "0px",
//     paddingLeft: "0px",
//   },
//   {
//     duration: 2,
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 16,
//     paddingRight: 16,
//   }
// );
