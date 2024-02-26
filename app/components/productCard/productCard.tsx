import toFarsiNumber from "@/app/utils/toFarsiNumber";
import React from "react";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  const cardColorList = [
    "orange-500",
    "teal-500",
    "purple-500",
    "emerald-500",
    "fuchsia-500",
  ];

  const randomNum = Math.floor(Math.random() * 5);

  return (
    <div
      className={`flex-shrink-0 relative overflow-hidden bg-${cardColorList[randomNum]} rounded-lg max-w-xs shadow-lg`}
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
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        ></div>
        <img
          className="relative w-40"
          src={product.images}
          alt={product.title}
        />
      </div>
      <div className="relative px-6 pb-6 mt-6">
        {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
        <div className="flex flex-col justify-between items-end">
          <span className="block font-semibold text-xl text-white">
            {product.title}
          </span>
          <span
            className={`w-full block bg-white rounded-full text-${cardColorList[randomNum]} text-xs font-bold pl-2 mt-2 leading-none flex items-center justify-between`}
          >
            {toFarsiNumber(product["manufacturer-price"])}
            <span className="bg-neutral-300  py-2 px-2 rounded-full">
              قیمت تولید کننده (ريال)
            </span>
          </span>
          <span
            className={`w-full block bg-white rounded-full text-${cardColorList[randomNum]} text-xs font-bold pl-2 mt-2 leading-none flex items-center justify-between`}
          >
            {toFarsiNumber(
              Math.abs(
                (product["consumer-price"] / 100) * product.discountPercentage -
                  product["consumer-price"]
              )
            )}
            <span className="bg-neutral-300  py-2 px-2 rounded-full">
              قیمت مصرف کننده (ريال)
            </span>
          </span>
          <span className="w-full flex justify-around mt-2 text-white">
            <span className="line-through">
              {toFarsiNumber(product["consumer-price"])}
            </span>
            <span>{toFarsiNumber(product.discountPercentage)}%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
