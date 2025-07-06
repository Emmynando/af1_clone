export interface HeroProps {
  mainContainerRef: React.RefObject<HTMLDivElement | null>;
  gradientBgRef: React.RefObject<HTMLDivElement | null>;
  imageDivRef: React.RefObject<HTMLDivElement | null>;
  otherJustRef: React.RefObject<HTMLDivElement | null>;
  justRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLDivElement | null>;
  headerRef: React.RefObject<HTMLDivElement | null>;
  lensCoverRef: React.RefObject<HTMLImageElement | null>;
}

// useEffect(() => {
//     if (
//       // !mainContainerRef.current ||
//       !navContainerRef.current ||
//       !imageDivRef.current
//     )
//       return;

//     const tl = gsap.timeline();
//     let mm = gsap.matchMedia();

//     // animate hero containaner
//     tl.fromTo(
//       gradientBgRef.current,
//       {
//         borderRadius: "0px",
//         height: "100dvh",
//         ease: "power2.out",
//       },
//       {
//         duration: 2,
//         borderRadius: "30px",
//         height: "85dvh",
//       }
//     );
//     // image div
//     tl.fromTo(
//       imageDivRef.current,
//       {
//         transform: "translateY(999px)",
//       },
//       {
//         duration: 0.5,
//         transform: "translateY(0px)",
//       },
//       // start 0.3 seconds after the timeline
//       0.3
//     );
//     // image conver
//     // Define responsive animations
//     mm.add(
//       {
//         // Mobile (up to 767px)
//         isMobile: "(max-width: 767px)",
//       },
//       (context) => {
//         let { isMobile } = context.conditions || {};

//         // lensCover animation based on screen size
//         if (isMobile) {
//           tl.fromTo(
//             lensCoverRef.current,
//             {
//               left: "53%",
//               bottom: "29%",
//               transform: "translateX(-50%)",
//             },
//             {
//               left: "11%",
//               bottom: "22%",
//               transform: "translateX(0%)",
//               duration: 0.5,
//             }
//           );
//         } else {
//           tl.fromTo(
//             lensCoverRef.current,
//             {
//               left: "36%",
//               // duration: 1,
//             },
//             { left: "10%" }
//           );
//         }
//       }
//     );
//     mm.add(
//       {
//         // Mobile (up to 767px)
//         isMobile: "(max-width: 767px)",
//       },
//       (context) => {
//         let { isMobile } = context.conditions || {};

//         // just text animation based on screen size
//         if (isMobile) {
//           tl.fromTo(
//             justRef.current,
//             {
//               opacity: 0,
//               display: "hidden",
//               // duration: 1,
//             },
//             { opacity: 1, display: "inline-flex", marginRight: "2rem" }
//           );
//           tl.fromTo(
//             otherJustRef.current,
//             {
//               opacity: 0,
//               display: "hidden",
//             },
//             {
//               // duration: 1,
//               opacity: 1,
//               display: "inline-flex",
//               marginLeft: "2rem",
//             },
//             "<"
//           );
//         } else {
//           tl.fromTo(
//             justRef.current,
//             {
//               opacity: 0,
//             },
//             {
//               // duration: 1.6,
//               opacity: 1,
//               marginRight: "4rem",
//             },
//             "<"
//           );
//           tl.fromTo(
//             otherJustRef.current,
//             {
//               opacity: 0,
//             },
//             {
//               // duration: 1,
//               opacity: 1,
//               marginLeft: "8rem",
//             },
//             "<"
//           );
//         }
//       }
//     );
//     tl.fromTo(
//       navContainerRef.current,
//       {
//         // FROM state
//         display: "none",
//         opacity: 0,
//       },
//       {
//         // TO state
//         display: "flex",
//         opacity: 1,
//         duration: 2,
//         ease: "power2.out",
//         onComplete: () => {
//           // Use GSAP to animate just text opacity back to 0
//           gsap.set(otherJustRef.current, { opacity: 0 });
//           gsap.set(justRef.current, { opacity: 0 });
//         },
//       },
//       // start seconds after the timeline
//       4
//     );
//     tl.fromTo(
//       headerRef.current,
//       { display: "none", opacity: 0 },
//       { duration: 2, display: "block", opacity: 1 },
//       "<"
//     );
//     tl.fromTo(
//       inputRef.current,
//       { display: "none", opacity: 0 },
//       { duration: 2, display: "flex", opacity: 1 },
//       "<"
//     );

//     return () => mm.revert();
//   }, []);
