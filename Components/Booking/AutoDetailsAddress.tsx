import React from "react";

const AutoDetailsAddress = () => {
  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
        />
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where to?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default AutoDetailsAddress;
