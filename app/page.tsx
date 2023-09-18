import Booking from "@/Components/Booking/Booking";
import Map from "@/Components/Map/Map";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="">
        <Booking />
      </div>
      <div className="col-span-2 bg-slate-400">
        <Map />
      </div>
    </div>
  );
}
