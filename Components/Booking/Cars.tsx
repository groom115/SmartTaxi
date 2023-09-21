import CarsList from "@/data/CarsList";
import React, { useState } from "react";
import Image from "next/image";
const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<number>();
  return (
    <div className="mt-3">
      <h1 className="font-semibold">Select Cars</h1>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">
        {CarsList.map((Car, index) => (
          <div
            className={`m-2 p-2 border-[1px] rounded-md hover:border-orange-200 hover:border-[2px] cursor-pointer ${
              selectedCar === index ? "border-orange-200 border-[2px]" : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedCar(index);
            }}
          >
            <Image
              src={Car.image}
              alt="cars"
              width={75}
              height={90}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-[12px] text-gray-500">{Car.name}</span>
              <span className="text-[12px] font-semibold">{Car.charges} $</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
