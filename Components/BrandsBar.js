import Image from "next/image";
import React from "react";

const BrandsBar = () => {
  return (
    <div className="bg-[#BE8B6B96] w-full h-[153px] flex flex-row justify-around gap-6 py-6">
      <Image
        width={60}
        height={60}
        src="/images/best.png"
        alt="Image 1"
        className="object-cover rounded-lg"
      />
      <Image
        width={60}
        height={60}
        src="/images/wallstreetjournal.png"
        alt="Image 2"
        className=" object-cover rounded-lg"
      />
      <Image
        width={60}
        height={60}
        src="/images/independent.png"
        alt="Image 3"
        className=" object-cover rounded-lg"
      />
      <Image
        width={60}
        height={60}
        src="/images/businessinsider.png"
        alt="Image 4"
        className=" object-cover rounded-lg"
      />
      <Image
        width={60}
        height={60}
        src="/images/PC.png"
        alt="Image 5"
        className=" object-cover rounded-lg"
      />
    </div>
  );
};

export default BrandsBar;
