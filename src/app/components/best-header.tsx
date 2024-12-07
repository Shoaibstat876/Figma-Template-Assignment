import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className=" w-[1230px]  h-[48px] pt-3 bg-[#000000] text-[#FAFAFA] flex items-center justify-center px-4">
 


 

      {/* Promotional Text - Centered */}
      <div className="w-[750px]">
      <p className="ml-32 text-center font-poppins text-sm w-[594px] h-[18px] font-normal">

          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-poppins text-sm font-semibold underline ml-3 tracking-wide">
            Shop Now
          </span>
        </p>
      </div>

      {/* Language Selector */}
      <select
        name="select"
        id="select"
        className="bg-[#000000] text-[#FAFAFA] text-center border-none"
      >
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default TopHeader;

export const Header = () => {
    return (
      // Parent div
      <div className="border-b-2 border-red-500 mb-4">
      { /*The main container for the header. Using flex layout to arrange elements.*/}
      <div className=" flex items-center w-[1190px] justify-between mt-6 px-4">
        
        {/* Brand/Logo section */}
        <div>
          <h2 className="text-[24px] font-inter text-[#000000] font-[700]">
            EXCLUSIVE
          </h2>
        </div>
  
        {/* Navigation Menu */}
        <ul className="flex gap-[48px] text-[#000000]">
          {/* Home link */}
          <li className="text-[16px] font-normal text-center font-poppins cursor-pointer">
            Home
          </li>
          {/* Contact link */}
          <li className="text-[16px] font-normal text-center font-poppins cursor-pointer">
            Contact
          </li>
          {/* About link */}
          <li className="text-[16px] font-normal text-center font-poppins cursor-pointer">
            About
          </li>
          {/* Sign Up link */}
          <li className="text-[16px] font-normal text-center font-poppins cursor-pointer">
            Sign Up
          </li>
        </ul>
  
        {/* Search Bar and Icons */}
        <div className="flex items-center gap-2">
          {/* Search Input with Icon */}
          <div className="flex items-center border border-gray-300 rounded-md px-2 ">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none text-sm bg-transparent px-2"
            />
            {/* Search Icon */}
            <IoIosSearch className="text-gray-500 " />
          </div>
  
          {/* Icons */}
          {/* Heart Icon */}
          <FaRegHeart className="text-[20px] text-[#000000] cursor-pointer" />
          {/* Shopping Cart Icon */}
          <MdOutlineShoppingCart className="text-[20px] text-[#000000] cursor-pointer" />
          {/* User Icon */}
          <FaRegUserCircle className="text-[20px] text-[#000000] cursor-pointer" />
        </div>
      </div>
      </div>
    );
  };
  