import Image from "next/image";
import React from "react";
import BrandsBar from "../../../../Components/BrandsBar";

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-row">
        <div className="w-1/2 ml-10 mt-25">
          <h1 className="text-[#DFB89f] font-semibold text-5xl">
            Track Your Dogs Health Like Never Before
          </h1>
          <span className="text-[#1E1E1E] text-2xl mt-15">
            Monitor daily activities, visualize trends, and share insights with
            veterinarians
          </span>
          <div className="text-white bg-[#DFB89f] text-center rounded-2xl w-[270px] h-10 py-2 shadow-2xl mt-5 my-5">
            Start Tracking Now
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/Mainpng.png"
            width={722}
            height={800}
            className="w-full h-[800px]"
            alt="image"
          />
        </div>
      </div>
      <BrandsBar />
    </div>
  );
};

export default page;
