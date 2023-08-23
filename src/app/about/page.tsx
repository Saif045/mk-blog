import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "About ",
  },
};

export default function About() {
  return (
    <div className="w-full h-full min-h-[70vh] flex flex-col md:flex-row gap-4 justify-center items-center">
      <Image
        src="/mk-photo.jpg"
        width={200}
        height={200}
        alt="Mohamed Khaled"
        className="rounded-full"
      />
      <div className=" w-[90%] max-w-[400px] text-center md:text-start">
        Computer engineering student who is interested in both hardware and
        software development. Fond of whatever related to the industry of
        Embedded Systems and electronic design. Interested in Electronics,
        Software developing and Embedded systems.
      </div>
    </div>
  );
}
