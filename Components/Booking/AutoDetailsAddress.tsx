import React, { useEffect, useState } from "react";

const AutoDetailsAddress = () => {
  const [source, setSource] = useState<any>("");
  const [dest, setDest] = useState<any>("");
  const [addressList, setaddressList] = useState<any>([]);
  const [sourceChange, setSourceChange] = useState<boolean>(false);
  const [destChange, setDestChange] = useState<boolean>(false);
  const getAddress = async () => {
    setaddressList([]);
    const query = sourceChange ? source : dest;
    const response = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setaddressList(result);
  };

  useEffect(() => {
    const delayFn = setTimeout(() => {
      getAddress();
    }, 1000);
    console.log(addressList);
    return () => clearTimeout(delayFn);
  }, [source, dest]);

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
          value={source}
          onChange={(e) => {
            setSourceChange(true);
            setSource(e.target.value);
          }}
        />

        {addressList?.searchResult?.suggestions && sourceChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20"
          >
            {addressList?.searchResult?.suggestions.map(
              (item: any, index: number) => (
                <h2
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSource(item.full_address);
                    setSourceChange(false);
                    setaddressList([]);
                  }}
                >
                  {item.full_address}
                </h2>
              )
            )}
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="relative">
          <label className="text-gray-400">Where to?</label>
          <input
            type="text"
            className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
            value={dest}
            onChange={(e) => {
              setDestChange(true);
              setDest(e.target.value);
            }}
          />
          {addressList?.searchResult?.suggestions && destChange ? (
            <div
              className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20"
            >
              {addressList?.searchResult?.suggestions.map(
                (item: any, index: number) => (
                  <h2
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDest(item.full_address);
                      setDestChange(false);
                      setaddressList([]);
                    }}
                  >
                    {item.full_address}
                  </h2>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AutoDetailsAddress;
