import CardsList from "@/data/CardsList";
import Image from "next/image";
import React, { useState } from "react";

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState<number>();
  return (
    <div className="mt-3">
      <h1 className="font-semibold">Payment Method</h1>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5">
        {CardsList.map((Cards, index) => (
          <div
            className={`w-[50px] m-2 p-2 border-[1px] rounded-md hover:border-orange-200 hover:border-[2px] cursor-pointer flex items-center
          hover:scale-110 transition-all ${
            activeIndex === index ? "border-orange-200 border-[2px]" : ""
          }`}
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            <Image src={Cards.image} alt="image" width={30} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
