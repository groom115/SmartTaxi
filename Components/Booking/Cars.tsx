import CarsList from "@/data/CarsList";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { DirectionDataContext } from "@/Context/DirectionDataContext";
import { CarAmount } from "@/Context/CarAmount";
const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<number>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { carAmount, setCarAmount } = useContext(CarAmount);

  const getCost = (charges: any) => {
    return (
      charges *
      directionData.routes[0].distance *
      0.000621371192
    ).toFixed(2);
  };

  return (
    <div className="mt-3">
      <h2 className="font-medium text-[14px] ">Select Car</h2>
      <div
        className="grid 
        grid-cols-3 
        md:grid-cols-2
        lg:grid-cols-3
         "
      >
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2
                 p-2 border-[1px] rounded-md 
                 hover:border-yellow-400 
                 cursor-pointer 
                 ${
                   index == selectedCar
                     ? "border-yellow-400 border-[2px]"
                     : null
                 }`}
            onClick={() => {
              setSelectedCar(index);
              setCarAmount(getCost(item.charges));
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={90}
              className="w-full"
            />
            <div className="flex justify-around mt-1 lg:flex-col flex-col md:flex-row">
              <span className="text-[12px] text-gray-500">{item.name}</span>
              {directionData?.routes ? (
                <span className="text-[12px] font-medium">
                  {getCost(item.charges)}$
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
