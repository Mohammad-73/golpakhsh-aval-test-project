import toFarsiNumber from "@/app/utils/toFarsiNumber";
import Image from "next/image";
import React from "react";

type Props = {
  product: any;
  textColor: string;
  bgColor: string;
};

const ProductCard = ({ product, textColor, bgColor }: Props) => {
  // const ImageLoader = (src: any) => {
  //   return `${src}`;
  // };

  return (
    <div
      className={`flex-shrink-0 relative overflow-hidden ${bgColor} rounded-lg max-w-xs shadow-lg`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-20 h-20 md:w-48 md:h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        ></div>
        <Image
          // loader={ImageLoader}
          className="relative w-24 md:w-40"
          src={product.images}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="relative text-white px-3 mx:px-6 pb-3 mx:pb-6 mt-3 mx:mt-6">
        <span className="block opacity-75 -mb-1">Indoor</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{product.title}</span>
          <span
            className={`block bg-white rounded-full ${textColor} text-xs font-bold px-3 py-2 leading-none`}
          >
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
