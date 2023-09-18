import React, { useEffect, useState } from "react";
import AutoDetailsAddress from "./AutoDetailsAddress";

const Booking = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold">Booking</h1>
      <div className="border-[1px] p-5 rounded-md max-h-full">
        <AutoDetailsAddress />
      </div>
    </div>
  );
};

export default Booking;
