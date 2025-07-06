import { TbWorld } from "react-icons/tb";
export default function Navbar({
  navContainerRef,
}: {
  navContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <main className="flex items-center pl-2 pr-4" ref={navContainerRef}>
      {/* <div className="relative h-[4rem] flex justify-end items-center w-[60%] ml-auto bg-red-900"> */}
      <div className="flex items-center justify-end w-[65%] h-[4rem]">
        <img
          src="/images/analog.png"
          alt="Logo"
          style={{ width: "40%", height: "100%" }}
        />
      </div>
      {/* <div className=" flex items-center justify-end px-2"> */}
      <div className="flex items-center justify-end w-[35%]  px-2 ">
        <TbWorld className="ml-[2.5rem] md:ml-0" />
        <select
          name="language"
          id="language"
          className=" md:max-w-[40%] text-xs w-[100%] md:w-[25%] outline-none "
        >
          <option value="English" className="text-xs">
            English
          </option>
          <option value="dutch" className="text-xs">
            Dutch (Netherland)
          </option>
        </select>
      </div>
    </main>
  );
}
