import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-evenly items-start mt-6">
      {/* Left Column: List Section */}
      <div className="flex flex-col gap-4 w-[217px] h-[350px]">
        <div className="w-[217px] h-auto ml-3">
          {/* Woman’s Fashion */}
          <span className="flex items-center gap-2">
            <p className="text-[#000000] w-[142px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
              Woman’s Fashion
            </p>
            <FaAngleRight className="text-[#000000] w-[7.78px] h-[12.73px]" />
          </span>

          {/* Men’s Fashion */}
          <span className="flex items-center gap-2">
            <p className="text-[#000000] w-[142px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
              Men’s Fashion
            </p>
            <FaAngleRight className="text-[#000000] w-[7.78px] h-[12.73px]" />
          </span>

          {/* Other Categories */}
          <p className="text-[#000000] w-[87px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Electronics
          </p>
          <p className="text-[#000000] w-[132px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Home & Lifestyle
          </p>
          <p className="text-[#000000] w-[73px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Medicine
          </p>
          <p className="text-[#000000] w-[137px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Sports & Outdoor
          </p>
          <p className="text-[#000000] w-[109px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Baby’s & Toys
          </p>
          <p className="text-[#000000] w-[131px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Groceries & Pets
          </p>
          <p className="text-[#000000] w-[128px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]">
            Health & Beauty
          </p>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="w-[2px] bg-gray-400 h-[350px] mt-0"></div>

      {/* Right Column: Image Section */}
      <div className="w-[1000px] h-[350px] ml-6">
        <Image src="/images/Hero-frame.png" alt="Hero" width={940} height={340} />
      </div>
    </div>
  );
};

export default Hero;

export const Hero1 = () => {
  return (
    <div>
      <div className="gap-[16px] w-[100px] h-[40px] flex justify-evenly">
        <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></div>
        <h2 className="w-[64px] h-[20px] font-[600] text-[16px] leading-[20px] text-[#DB4444] font-poppins pt-[10px] ">
          Today’s
        </h2>
      </div>
      <div>
        <div>
          <h2 className="w-[211px] h-[48px] font-inter font-[] text-[36px]">Flash Sales</h2>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
