import Image from "next/image";
import HomeHero from "@/public/images/HomeHero.png";
import topLeftLeaf from "@/public/images/2.png";
import bottomRightLeaf from "@/public/images/3.png";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#356455]">
      <div className="w-[30%] min-h-screen flex justify-between">
        left
        <div className="w-[30%] bg-[#AA8565] h-full relative">
          <span className="h-[70%] w-[170%] rounded-full absolute bg-green-700 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src={HomeHero}
              alt="Home page image"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover object-left"
              unoptimized
            />
          </span>
        </div>
      </div>
      <div className="w-[70%] relative overflow-hidden">
        <Image
          src={topLeftLeaf}
          alt="leaf"
          width={100}
          height={100}
          className="absolute -top-10 -left-20 w-[30%]"
          unoptimized
        />
        <Image
          src={bottomRightLeaf}
          alt="leaf"
          width={100}
          height={100}
          className="absolute -bottom-10 -right-20 w-[30%]"
          unoptimized
        />
        <div className="w-[80%] text-white absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
          <h1
            style={{ fontFamily: "Lexend Mega , sans-serif" }}
            className="text-6xl"
          >
            Happy
          </h1>
          <h1
            style={{ fontFamily: "Lexend Mega , sans-serif" }}
            className="text-6xl font-thin"
          >
            Plant.
          </h1>
          <hr className="h-1 my-4 bg-white border-0 w-[10%]"></hr>
          <h3 className="text-3xl">We make plants for your house</h3>
          <button
            style={{ fontStretch: "expanded" }}
            className="px-4 py-2 rounded-md bg-[#478471] text-white my-4 tracking-wider"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </main>
  );
}
