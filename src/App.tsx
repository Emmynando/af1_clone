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
  const tl = gsap.timeline({
    onStart: () => console.log("Timeline started"),
    onUpdate: () => console.log("Timeline updating"),
    onComplete: () => {
      console.log("completed");
    },
  });

  useEffect(() => {
    if (!mainContainerRef.current || !navContainerRef.current || imageDivRef)
      return;
    // image div
    tl.fromTo(imageDivRef, {}, {});

    tl.fromTo(
      navContainerRef.current,
      {
        // FROM state
        display: "none",
        opacity: 0,
      },
      {
        // TO state
        delay: 5,
        display: "flex",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    // animate hero containaner
    tl.fromTo(
      mainContainerRef.current,
      {
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
      },
      {
        delay: 2,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
      }
    );
    tl.fromTo(
      gradientBgRef.current,
      {
        duration: 2,
        borderRadius: "0px",
        height: "100dvh",
        ease: "power2.out",
      },
      {
        delay: 2,
        borderRadius: "30px",
        height: "85dvh",
      }
    );
    // tl.set(mainContainerRef.current, );
    // // set initial state of hero gradient
    // tl.set(gradientBgRef.current, );

    // tl.from(mainContainerRef.current, );
    // tl.from(gradientBgRef.current, );
  }, []);

  return (
    <>
      <Navbar navContainerRef={navContainerRef} />
      <Hero
        mainContainerRef={mainContainerRef}
        gradientBgRef={gradientBgRef}
        imageDivRef={imageDivRef}
      />
      {/* <RefenceImage /> */}
    </>
  );
}

export default App;
