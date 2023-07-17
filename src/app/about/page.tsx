import Image from "next/image";

export default function About() {
  return (
    <div className="w-full py-10 pt-16 flex flex-col gap-4 justify-center items-center">
      <Image
        src="/mk-photo.jpg"
        width={200}
        height={200}
        alt="Mohamed Khaled"
        className="rounded-full"
      />
      <div className=" w-[90%] xs:w-[80%] sm:w-2/3 md:w-1/3 text-center">
        Computer engineering student who is interested in both hardware and
        software development. Fond of whatever related to the industry of
        Embedded Systems and electronic design. Interested in Electronics,
        Software developing and Embedded systems.
      </div>
    </div>
  );
}
