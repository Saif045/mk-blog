import { navData } from "../../assets/data";
import Link from "next/link";
import Switcher from "@/utils/Switcher";
import ClientOnly from "@/utils/ClientOnly";
import SearchPopup from "../SearchPopup";

export const DesktopHeader = () => {
  return (
    <div className="  hidden sm:flex justify-around  w-full fixed top-0 left-0 h-20  items-center z-[50] text-black  dark:text-white bg-white dark:bg-black">
      <Link href="/">
        <div className=" mb-4 text-4xl  mt-2 logo ">MK LOGO</div>
      </Link>

      <div className="flex  gap-3  items-center">
        {navData.map((element, i) => (
          <Link href={element.to} key={i}>
            <p>{element.name}</p>
          </Link>
        ))}
        <ClientOnly>
          <div>
            <Switcher hideText />
          </div>
          <div>
            <SearchPopup />
          </div>
        </ClientOnly>
      </div>
    </div>
  );
};
