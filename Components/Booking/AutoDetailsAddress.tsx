import React, { useEffect, useState } from "react";

const AutoDetailsAddress = () => {
  const [source, setSource] = useState<any>("");
  const [dest, setDest] = useState<any>("");
  const [addressList, setaddressList] = useState<any>([]);

  const getAddress = async (text: string) => {
    const response = await fetch("/api/search-address?q=" + text, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setaddressList(result);
  };

  useEffect(() => {
    const delayFn = setTimeout(() => {
      getAddress(source);
    }, 1000);
    console.log(addressList);
    return () => clearTimeout(delayFn);
  }, [source]);

  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
          onChange={(e) => setSource(e.target.value)}
        />
        {/* {addressList?.suggestions ? (
          <div>
            {addressList?.suggestions.map((element: any) => {
              <h2>{element.name}</h2>;
            })}
          </div>
        ) : null} */}
      </div>
      <div className="mt-3">
        <label className="text-gray-400">Where to?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
          onChange={(e) => setDest(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AutoDetailsAddress;
