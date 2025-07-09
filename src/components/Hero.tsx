import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { HeroProps } from "../constants";

gsap.registerPlugin(ScrollTrigger);
export default function Hero({
  mainContainerRef,
  gradientBgRef,
  imageDivRef,
  otherJustRef,
  justRef,
  lensCoverRef,
  headerRef,
  inputRef,
}: HeroProps) {
  useGSAP(
    () => {
      gsap.to("#lensCover", {
        scrollTrigger: {
          trigger: "#itemsDiv",
          start: "10% top",
          end: "bottom top",

          toggleActions: "play play reverse reverse",
          scrub: 1,
        },
        // duration: 3,
        left: "28%",
      });
      gsap.to("#gradientBg", {
        scrollTrigger: {
          trigger: "#itemsDiv",
          start: "10% top",
          end: "bottom 10%",

          toggleActions: "play play reverse reverse",
          scrub: 1,
        },
        // duration: 3,
        scaleX: 0.7,
      });
    },
    { dependencies: ["#itemsDiv"], revertOnUpdate: true }
  );

  return (
    <main className="py-2 px-2 md:px-4" ref={mainContainerRef}>
      <div
        className="h-[85dvh] rounded-[20px] md:rounded-[30px] flex justify-center flex-cols"
        style={{
          background:
            window.innerWidth < 768
              ? "radial-gradient(200% 75% at 50% 50%, rgb(0, 79, 206) 0%, rgb(0, 79, 206) 15.0232%, rgb(227, 227, 227) 54.2969%)"
              : "radial-gradient(50% 75% at 50% 50%, rgb(0, 54, 140) 0%, rgb(0, 79, 206) 10.6771%, rgb(237, 237, 237) 100%)",
        }}
        ref={gradientBgRef}
        id="gradientBg"
      >
        <span className="absolute z-2 top-[55%] md:top-[37%] flex text-white text-2xl font-bold">
          <p ref={justRef}>Just</p>
          <p ref={otherJustRef}> Point and Shoot</p>
        </span>
        <span className="absolute z-3 top-[50%] md:top-[37%] text-white">
          <p className="text-sm md:text-[17px] font-garamond font-normal">
            Available Winter 2025
          </p>
        </span>

        {/* items div */}
        <div
          className="w-[95%] md:w-[85%] flex flex-col items-center pt-8 h-[100%] relative overflow-y-hidden"
          id="itemsDiv"
        >
          <h3
            className="text-white text text-[34px] -tracking-[1.8px] font-bold mt-[3rem] md:mt-0"
            ref={headerRef}
          >
            Analogue aF-1
          </h3>
          <p className="text-white text-base font-normal text-white opacity-[0.6] leading-[13.6px]">
            Just point and Shoot
          </p>

          {/* input div */}
          <div
            className="rounded-[15px] p-1 md:p-[.5rem] w-[92%] lg:w-[38%] flex gap-[0.5rem] md:gap-2 mt-2 md:bg-[#ffffff1c]"
            // style={{
            //   boxShadow: `
            //   rgba(255, 255, 255, 0.11) inset 0 0 0 1px,
            //   rgba(255, 255, 255, 0.15) 0 0 0 1px
            // `,
            // }}
            ref={inputRef}
          >
            <input
              autoCapitalize="false"
              autoComplete="false"
              type="email"
              placeholder="name@email.com"
              spellCheck="false"
              className="text-white placeholder:text-[rgba(255,255,255,0.3)] outline-none text-[15px] -tracking-[0.02em] md:leading-[1em] flex-1 caret-white outline-none bg-[#ffffff1c] md:bg-transparent rounded-[15px] md:rounded-0 py-2 md:py-0 px-2 md:px-0"
            />
            <button className="bg-[#022fff] text-xs md:text-[14px] rounded-[15px] md:rounded-[10px] cursor-pointer py-[12px] md:py-2 px-1 text-white font-semibold px-2">
              Stay tuned
            </button>
          </div>
          {/* image div */}
          <div
            className="flex-1 w-[78%] -mb-[5rem] md:-mb-[3rem] mt-2 md:mt-2 flex justify-center relative"
            ref={imageDivRef}
          >
            <img
              src="/images/heroCam.avif"
              alt="af1"
              className="h-[57%] md:h-[95%] w-[88%] mt-[5rem] md:mt-0 lg:mt-0"
            />
            <img
              ref={lensCoverRef}
              style={{
                aspectRatio: "3 / 4",
                // height: "calc(100% - 14%)",
                width: "clamp(5rem, 20vw, 18rem)",
              }}
              id="lensCover"
              src="/images/lensCov.avif"
              alt="af1"
              className="absolute left-[9%] md:left-[10%] bottom-[22%] md:bottom-[8%] lg:bottom-[9.1%] h-[calc(100%-50%)] md:h-[calc(100%-14%)]"
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
