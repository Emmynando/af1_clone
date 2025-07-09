import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/all";
import { useRef } from "react";

const CAMERAROLL = [
  { id: "c1", image: "/images/cam-roll1.avif", imageHeight: "60%" },
  { id: "c2", image: "/images/can-roll2.avif", imageHeight: "30%" },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
type RefsType = {
  [key: string]: HTMLDivElement | null;
};

export default function RefenceImage() {
  const rollDivRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<RefsType>({});

  useGSAP(
    () => {
      gsap.set("#imgRollDiv", {
        width: "50%",
        y: 100,
      });
      gsap.set("#firstText", { text: "" });
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: rollDivRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
          markers: true,
        },
      });
      if (!rollDivRef.current) return;
      mainTl.to("#imgRollDiv", {
        width: "30%",
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
      mainTl.to(
        "#firstText",
        {
          text: {
            rtl: false,
            // speed: ,
            value:
              "The aF-1 helps you to slow down, observe your surroundings and focus on the beauty of the present",
            delimiter: "",
          },
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
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
      <div
        className="w-[170%] md:w-full h-full bg-[url('/images/cma-roll5.avif')] bg-cover bg-no-repeat bg-[length:180%] md:bg-[length:133%] bg-[position:-10rem_1rem] md:bg-[position:center_-24em] object-fill h-[dvh]"
        id="firstImage"
      >
        <h2
          className="text-white text-center font-garamond font-normal w-[15ch] md:w-[19ch] leading-[1] -tracking-[1.5px] text-[28px] md:text-[64px] absolute top-[45%] md:top-[35%] left-[5%] md:left-[25%] z-4"
          id="firstImageText"
        >
          Remember when every shot was a moment to cherish
        </h2>
      </div>

      <div
        className="flex justify-center items-center w-full bg-[#080808] no-scrollbar overflow-y-hidden h-dvh"
        id="rollDiv"
        ref={rollDivRef}
      >
        <h2
          className="text-white text-center font-garamond font-normal w-[90%] md:w-[90%] leading-[1] -tracking-[1.5px] text-[28px] md:text-[64px] absolute top-[45%] md:top-[150%] left-[5%] md:left-[5%] z-10"
          id="firstText"
        >
          The aF-1 helps you to slow down, observe your surroundings and focus
          on the beauty of the present
        </h2>
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
    </main>
  );
}
