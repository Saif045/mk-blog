"use client";
import { navsocials } from "@/assets/data";
import ClientOnly from "@/utils/ClientOnly";
import useDarkSide from "@/utils/useDarkSide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  const [isDarkMode] = useDarkSide();

  return (
    <>
      <footer id="site-footer">
        <div className="flex flex-col justify-between items-center container mx-auto  lg:max-w-5xl py-8">
          <div className="flex gap-2 mb-1">
            {navsocials.map((element, i) => (
              <div key={i}>
                <Link href={element.to} target="_blank">
                  <ClientOnly>
                    <FontAwesomeIcon
                      icon={element.icon}
                      color={isDarkMode ? "#fff" : "#000"}
                      size="xl"
                    />
                  </ClientOnly>
                </Link>
              </div>
            ))}
          </div>
          Mohamed Khaled • © 2023
          <span>
            Developed By{" "}
            <Link href="https://saifosama.co/" target="_blank">
              Saif Osama
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
