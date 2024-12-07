import React from "react";
import { LuSendHorizontal } from "react-icons/lu";  // Ensure this is correct

const Footer = () => {
  return (
    <div className="h-[440px] w-[1230px] pt-[10%] pl-[10%] bg-[#000000]">
      <div>
        {/* Logo */}
        <h2 className="text-[24px] font-inter text-[#fafafa] font-[700] w-[118px] h-[24px]">
          EXCLUSIVE
        </h2>

        {/* Subscribe Heading */}
        <h2 className="w-[101px] h-[28px] font-poppins font-[500] text-[20px] text-[#fafafa] mb-4">
          Subscribe
        </h2>

        {/* Subscribe Description */}
        <p className="text-[#fafafa] font-poppins text-[16px] font-[400] w-[206px] h-[24px]">
          Get 10% off your first order
        </p>

        {/* Subscribe Button */}
        <button className="border-[1.5px] pt-[12px] pb-[12px] pl-[16px] w-[217px] h-[48px] text-[#fafafa] flex items-center bg-[#000000] rounded-[4px]">
          <input
            type="email"
            className="flex-1 bg-transparent text-[#fafafa] outline-none w-[120px] pr-[10px]"  // Adjusted input width slightly
            placeholder="Enter your email"
          />
          {/* Icon with margin adjustment */}
          <LuSendHorizontal className="text-[#fafafa] w-[24px] h-[20px] mr-8" />  {/* Adjusted margin to bring it closer */}
        </button>
      </div>
    </div>
  );
};

export default Footer;
