import React, { useEffect, useState } from "react";
import AutoDetailsAddress from "./AutoDetailsAddress";
import Cars from "./Cars";
import Cards from "./Cards";

const Booking = () => {
  return (
    <div className="p-5">
      <h1 className="text-[20px] font-bold">Booking</h1>
      <div className="border-[1px] p-5 rounded-md max-h-full">
        <AutoDetailsAddress />
        <Cars />
        <Cards />
        <button className="p-1 bg-yellow-400 w-full mt-3 rounded-md">
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
