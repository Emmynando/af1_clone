export default function Testing() {
  return (
    <div
      className="flex justify-center items-center w-full bg-[#080808] no-scrollbar overflow-y-hidden  h-dvh"
      id="rollDiv"
      // ref={rollDivRef}
    >
      <h2
        className="text-white text-center font-garamond font-normal w-[90%] md:w-[90%] leading-[1] -tracking-[1.5px] text-[28px] md:text-[64px] absolute top-[45%] md:top-[30%] left-[5%] md:left-[5%] z-10"
        id="firstText"
      >
        The aF-1 helps you to slow down, observe your surroundings and focus on
        the beauty of the present
      </h2>
      <div
        className={`relative flex flex-col items-center justify-center`}
        id="imgRollDiv"
      >
        {/* {CAMERAROLL.map((item) => (
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
          ))} */}
      </div>
    </div>
  );
}
