import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";

const CAMERAROLL = [
  //   { id: "c1", image: "/images/cam-roll1.avif", imageHeight: "60%" },
  { id: "c2", image: "/images/can-roll2.avif", imageHeight: "30%" },
  { id: "c3", image: "/images/cam-roll3.jpg", imageHeight: "80%" },
  { id: "c4", image: "/images/cam-roll4.avif", imageHeight: "80%" },
  { id: "c5", image: "/images/cma-roll5.avif", imageHeight: "80%" },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
type RefsType = {
  [key: string]: HTMLDivElement | null;
};

export default function SecondRefenceImage() {
  const rollDivRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<RefsType>({});

  useGSAP(
    () => {
      // Single ScrollTrigger that handles everything
      // const mainTl = gsap.timeline();

      // const computedStyle = getComputedStyle(imgRollDiv);
      gsap.set("#imgRollDiv", {
        width: "30%",
        y: 100,
      });
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: rollDivRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
          markers: true,
        },
      });
      if (!rollDivRef.current) return;
      // gsap.set("#imgRollDiv",);
      mainTl.to("#imgRollDiv", {
        width: "20%",
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <main
      className="h-dvh w-dvw bg-white overflow-x-hidden relative"
      id="mainContainer"
    >
      {/* <span id="secondText" className="absolute bottom-[10%] right-[5%] z-10">
        <h3 className=" w-[10ch] md:w-[19ch] text-white leading-[1] text-base md:text-[28px] -tracking-[1.5px] font-bold">
          Discover the joy of capturing life, one frame at a time
        </h3>
      </span>
      <span id="thirdText" className="absolute bottom-[10%] right-[5%] z-2">
        <h3 className="w-[8ch]  text-white leading-[1] text-base md:text-[28px] -tracking-[1.5px] font-bold ">
          Greatness, takes time
        </h3>
      </span>
      {/* <div
        className="flex justify-center items-center w-full bg-[#080808] overflow-y-scroll no-scrollbar"
        id="rollDiv"
      > */}
      <div
        className="flex justify-center items-center w-full bg-[#080808] no-scrollbar overflow-y-hidden h-dvh pt-8"
        id="rollDiv"
        ref={rollDivRef}
      >
        <div
          className={`relative flex flex-col items-center justify-center`}
          id="imgRollDiv"
        >
          {CAMERAROLL.map((item) => (
            <div
              key={item.id}
              className="relative w-full"
              id={item.id}
              ref={(el) => {
                (refs.current[item.id] as HTMLDivElement | null) = el;
              }}
            >
              <img
                src={item.image}
                className={`h-${item.imageHeight} w-full`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* next div */}
      {/* <div
        className="flex justify-center items-center w-full bg-[#080808] no-scrollbar overflow-y-hidden h-dvh"
        // ref={rollDivRef}
      >
        <div className={`relative flex flex-col items-center justify-center`}>
          {CAMERAROLL.map((item) => (
            <div
              key={item.id}
              className="relative w-full"
              id={item.id}
              // ref={(el) => {
              //   (refs.current[item.id] as HTMLDivElement | null) = el;
              // }}
            >
              <img
                src={item.image}
                className={`h-${item.imageHeight} w-full`}
              />
            </div>
          ))}
        </div>
      </div> */}
    </main>
  );
}

// useEffect(() => {
//     const el = refs.current["c1"];
//     if (!el) return;

//     let prevY = el.getBoundingClientRect().y;
//     let rafId: number;

//     const track = () => {
//       const y = el.getBoundingClientRect().y;
//       if (y !== prevY) {
//         firstImgRef.current = y;
//         // console.log("Y changed:", y);
//         if (firstImgRef.current < 613) {
//           setFirstImg(true);
//         }
//         prevY = y;
//       }
//       rafId = requestAnimationFrame(track);
//     };

//     track();

//     return () => cancelAnimationFrame(rafId);
//   }, []);

// useEffect(() => {
//   const el = refs.current["c1"];
//   if (!el) return;

//   const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting) {
//       const rect = el.getBoundingClientRect();
//       console.log(rect);
//     }
//   });

//   observer.observe(el);

//   return () => observer.disconnect();
// }, [refs.current["c1"].y]);

// ScrollTrigger.create({
//               trigger: "#c1",
//               start: "top top",
//               end: "bottom 80%",
//               pin: true,
//               pinSpacing: false,
//               markers: true, // Remove this in production
//               onEnter: () => console.log("c1 enter and pinned"),
//               onLeave: () => console.log("c1 leave and unpinned"),
//               onEnterBack: () => console.log("c1 enter back"),
//               onLeaveBack: () => console.log("c1 leave back"),
//             });

// ScrollTrigger.create({
//       trigger: "#mainContainer",
//       pin: true,
//       pinSpacing: false,
//       start: "top top",
//       end: "+=200%", // Adjust based on your content
//       onUpdate: (self) => {
//         // Animate elements based on scroll progress
//         const progress = self.progress;

//         // Example animations based on scroll progress
//         gsap.to("#imageRoll", {
//           display: "block",
//           y: progress * -50,
//           duration: 0.1,
//           ease: "elastic.in",
//         });
//       },
//     });
