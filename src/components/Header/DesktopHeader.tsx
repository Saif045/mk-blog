import { navData } from "../../assets/data";
import Link from "next/link";
import Switcher from "@/utils/Switcher";
import ClientOnly from "@/utils/ClientOnly";
import SearchPopup from "../SearchPopup";

export const DesktopHeader = () => {
  return (
    <div className="  hidden sm:flex justify-between px-4 md:px-10 xl:px-20  w-full fixed top-0 left-0 h-14  items-center z-[50] text-black  dark:text-white bg-white dark:bg-black">
      <div className="flex  gap-4">
        {navData.map((element, i) => (
          <Link href={element.to} key={i}>
            <p>{element.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex  gap-3  items-center">
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
