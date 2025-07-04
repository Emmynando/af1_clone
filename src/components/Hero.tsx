// import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { HeroProps } from "../constants";

gsap.registerPlugin(ScrollTrigger);
export default function Hero({
  mainContainerRef,
  gradientBgRef,
  imageDivRef,
}: HeroProps) {
  useGSAP(
    () => {
      gsap.to("#lensCover", {
        scrollTrigger: {
          trigger: "#itemsDiv",
          start: "10% top",
          end: "bottom top",
          // markers: true,
          toggleActions: "play play reverse reverse",
          scrub: 1,
        },
        // duration: 3,
        left: "28%",
      });
    },
    { dependencies: ["#itemsDiv"], revertOnUpdate: true }
  );

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#itemsDiv",
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 0.5,
  //         markers: true,
  //       },
  //     });

  //     tl.to("#lensCover", { left: "24%" });
  //   },
  //   { dependencies: ["#itemsDiv"], revertOnUpdate: true }
  // );

  return (
    <main className="py-2 px-4" ref={mainContainerRef}>
      <div
        className="h-[85dvh] rounded-[30px] flex justify-center flex-cols"
        style={{
          background:
            "radial-gradient(50% 75% at 50% 50%, rgb(0, 54, 140) 0%, rgb(0, 79, 206) 10.6771%, rgb(237, 237, 237) 100%)",
        }}
        ref={gradientBgRef}
      >
        <span className="absolute top-[40%] flex text-white text-lg font-bold">
          <p className="text-lg text-bold">Just</p>
          <p> Point and Shoot</p>
        </span>
        {/* items div */}
        <div
          className="w-[75%] flex flex-col items-center pt-8 h-[100%] relative overflow-y-hidden"
          id="itemsDiv"
        >
          <h3 className="text-white text text-[34px] -tracking-[1.8px] font-bold">
            Analogue aF-1
          </h3>
          <p className="text-white text-base font-normal text-white opacity-[0.6] leading-[13.6px]">
            Just point and Shoot
          </p>

          {/* input div */}
          <div
            className="rounded-[15px] p-[.5rem] w-[42%] flex gap-2 mt-2 bg-[#ffffff1c]"
            style={{
              boxShadow: `
      rgba(255, 255, 255, 0.11) inset 0 0 0 1px,
      rgba(255, 255, 255, 0.15) 0 0 0 1px
    `,
            }}
          >
            <input
              autoCapitalize="false"
              autoComplete="false"
              type="email"
              placeholder="name@email.com"
              spellCheck="false"
              className="text-white placeholder:text-[rgba(255,255,255,0.3)] outline-none text-[15px] -tracking-[0.02em] leadinf-[1em] flex-1 caret-white outline-none"
            />
            <button className="bg-[#022fff] px-[14px] rounded-[10px] cursor-pointer py-2 text-white font-semibold">
              Stay tuned
            </button>
          </div>
          {/* image div */}
          <div
            className="flex-1 w-[78%] mt-2 flex justify-center relative"
            ref={imageDivRef}
          >
            <img
              src="/images/heroCam.avif"
              alt="af1"
              className="h-[95%] w-[92%]"
            />
            <img
              style={{
                aspectRatio: "3 / 4",
                height: "calc(100% - 10%)",
                width: "clamp(5rem, 19vw, 16rem)",
              }}
              id="lensCover"
              src="/images/lensCov.avif"
              alt="af1"
              className="absolute left-[8%] bottom-[6%]  md:bottom-[8%] lg:bottom-[4.1%]"
            />
            {/* <img
              id="lensCover"
              src="/images/lensCov.avif"
              alt="af1"
              className="absolute md:h-[86%] lg:h-[90%] left-[8%] md:w-[12rem] lg:w-[16rem] md:bottom-[8%] lg:bottom-[5%]"
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

// const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     function handleResize() {
//       const newSize = {
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//       setWindowSize(newSize);
//       console.log("Window size changed:", newSize);
//     }

//     // Log initial size
//     console.log("Initial window size:", windowSize);

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [windowSize]); // Empty dependency array means this runs once on mount
