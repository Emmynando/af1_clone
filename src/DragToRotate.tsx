import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable, InertiaPlugin);
export default function DragToRotate() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  //   for cursor Taracking
  const containerRef = useRef<HTMLDivElement | null>(null);
  const orbitTextRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const orbit = orbitTextRef.current;
  //   if (!container || !orbit) return;

  //   // Follow cursor
  //   const moveHandler = (e: MouseEvent) => {
  //     gsap.to(orbit, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.3,
  //       ease: "power2.out",
  //     });
  //   };

  //   container.addEventListener("mousemove", moveHandler);

  //   // Rotate orbiting text
  //   gsap.to(orbit.querySelector(".text-ring"), {
  //     rotate: 360,
  //     repeat: -1,
  //     ease: "linear",
  //     duration: 8,
  //   });

  //   return () => {
  //     container.removeEventListener("mousemove", moveHandler);
  //   };
  // }, []);

  // useGSAP(() => {
  //   if (!imageRef.current || !containerRef.current) return;
  //   let lastX = 0;

  //   Draggable.create(imageRef.current, {
  //     type: "x,y",
  //     inertia: true,
  //     bounds: containerRef.current,
  //     // activeCursor: "grabbing",
  //     edgeResistance: 0.9,

  //     onPress() {
  //       lastX = this.x;
  //     },

  //     onDrag() {
  //       const deltaX = this.x - lastX;
  //       lastX = this.x;
  //       gsap.to(this.target, {
  //         rotateY: `+=${deltaX * 0.5}`,
  //         duration: 0.2,
  //         ease: "power2.out",
  //       });
  //     },
  //   });
  // }, []);

  useGSAP(() => {
    if (!imageRef.current || !containerRef.current || !orbitTextRef.current)
      return;

    let lastX = 0;
    let lastY = 0;

    // 🌀 Make the SVG orbit text follow the mouse
    const moveHandler = (e: MouseEvent) => {
      const containerRect = containerRef.current!.getBoundingClientRect();

      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      gsap.to(orbitTextRef.current, {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    containerRef.current.addEventListener("mousemove", moveHandler);

    // 🌀 Make image draggable + rotatable
    Draggable.create(imageRef.current, {
      type: "x,y",
      inertia: true,
      onPress() {
        lastX = this.x;
        lastY = this.y;
      },
      onDrag() {
        const deltaX = this.x - lastX;
        const deltaY = this.y - lastY;
        lastX = this.x;
        lastY = this.y;
        gsap.to(this.target, {
          rotationY: `+=${deltaX * 0.5}`,
          rotationX: `+=${-deltaY * 0.3}`,
          duration: 0.2,
          ease: "power2.out",
        });
      },

      bounds: containerRef.current,
      edgeResistance: 1,
    });

    return () => {
      containerRef.current?.removeEventListener("mousemove", moveHandler);
    };
  }, {});

  return (
    <main className="relative flex items-center justify-center pt-4">
      <div
        className="h-[55rem] w-[90%] rounded-[20px] md:rounded-[30px] flex justify-center  flex-col"
        ref={containerRef}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #020202, #030303, #040404, #050505, #060606, #161616, #323232, #414141, #494949)",
        }}
      >
        <div>
          <h2 className="text-white text-center mt-[7rem] mb-[3rem] text-3xl font-bold">
            Take a closer look
          </h2>
        </div>
        <div
          ref={orbitTextRef}
          className="absolute top-0 left-0 pointer-events-none z-50"
          style={{
            width: "150px",
            height: "150px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-spin-slow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                  // d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="white" fontSize="12" fontFamily="inter">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Drag to rotate
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div
          id="imageBound"
          className="flex-1 h-[90%] w-full"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            ref={imageRef}
            id="rotatingImg"
            src="/images/camera-1.avif"
            alt="af1"
            className="mt-auto h-full"
            data-clickable="true"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>
    </main>
  );
}

//   useEffect(() => {
//     const tooltip = tooltipRef.current;
//     const container = containerRef.current;
//     if (!tooltip || !container) return;

//     gsap.set(tooltip, {
//       opacity: 0,
//       scale: 0.8,
//       xPercent: -50,
//       yPercent: -50,
//       pointerEvents: "none",
//     });

//     let mouse = { x: 0, y: 0 };
//     let rafId: number;

//     const radius = 30;

//     const animate = () => {
//       angleRef.current += 0.05;

//       const x = mouse.x + radius * Math.cos(angleRef.current);
//       const y = mouse.y + radius * Math.sin(angleRef.current);

//       gsap.set(tooltip, {
//         x,
//         y,
//       });

//       rafId = requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const handleMouseEnter = () => {
//       gsap.to(tooltip, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.3,
//         ease: "back.out(1.7)",
//       });
//       animate();
//     };

//     const handleMouseLeave = () => {
//       cancelAnimationFrame(rafId);
//       gsap.to(tooltip, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.2,
//         ease: "power2.in",
//       });
//     };

//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseenter", handleMouseEnter);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(rafId);
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseenter", handleMouseEnter);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);
