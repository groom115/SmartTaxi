import React, { useContext, useEffect, useState } from "react";
import AutoDetailsAddress from "./AutoDetailsAddress";
import Cars from "./Cars";
import Cards from "./Cards";
import { CarAmount } from "@/Context/CarAmount";
import { useRouter } from "next/navigation";

const Booking = () => {
  const { carAmount, setCarAmount } = useContext(CarAmount);
  const router: any = useRouter();
  return (
    <div className="p-5">
      <h1 className="text-[20px] font-bold">Booking</h1>
      <div className="border-[1px] p-5 rounded-md max-h-full">
        <AutoDetailsAddress />
        <Cars />
        <Cards />
        <button
          className={`p-1 ${
            carAmount ? "bg-yellow-400" : "bg-slate-400"
          } w-full mt-3 rounded-md `}
          onClick={() => router.push("/Payment")}
          disabled={!carAmount}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
