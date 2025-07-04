import { TbWorld } from "react-icons/tb";
export default function Navbar({
  navContainerRef,
}: {
  navContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <main className="flex items-center pl-2 pr-4" ref={navContainerRef}>
      <div className="relative h-[4rem] flex justify-end items-center w-[62.5%] ">
        <img
          src="/images/analog.png"
          alt="Logo"
          style={{ width: "20%", height: "100%" }}
        />
      </div>
      <div className="w-[37.5%] flex items-center justify-end px-2">
        <TbWorld />
        <select
          name="language"
          id="language"
          className="text-xs w-[6rem] outline-none"
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
