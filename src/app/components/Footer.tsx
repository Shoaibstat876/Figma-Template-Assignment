import React from "react";
import { LuSendHorizontal } from "react-icons/lu";  // Ensure this is correct
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";
const Footer = () => {
  return (
    <div className="h-[440px] w-[1230px] pt-[10%] pl-[10%] bg-[#000000] flex justify-evenly">
      <div>
        {/* Logo */}
        <h2 className="text-[24px] font-inter mb-4 text-[#fafafa] font-[700] w-[118px] h-[24px]">
          EXCLUSIVE
        </h2>

        {/* Subscribe Heading */}
        <h2 className="w-[101px] h-[28px] mb-3 font-poppins font-[500] text-[20px] text-[#fafafa] ">
          Subscribe
        </h2>

        {/* Subscribe Description */}
        <p className="text-[#fafafa] mb-3 font-poppins text-[16px] font-[400] w-[206px] h-[24px]">
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

      <div>
       <h2 className="font-poppins mb-4 w-[81px] h-[28px] text-[20px] text-[#fafafa] font-[500] leading-[28px]">Support</h2> 
       <p className="font-poppins mb-3 font-[400] text-[16px] w-[175px] h-[48-px] text-[#fafafa] leading-[24px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
       <p className="font-poppins mb-3 font-[400] text-[16px] w-[175px] h-[24-px] text-[#fafafa] leading-[24px]">exclusive@gmail.com</p>
       <p className="font-poppins mb-3 font-[400] text-[16px] w-[168px] h-[24-px] text-[#fafafa] leading-[24px]">+88015-88888-9999</p>
        </div>
      <div>
        <h2 className="font-poppins mb-4 w-[85px] h-[28px] text-[20px] text-[#fafafa] font-[500] leading-[28px]">Account</h2>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[94px] h-[24-px] text-[#fafafa] leading-[24px]">My Account</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[123px] h-[24-px] text-[#fafafa] leading-[24px]">Login / Register</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[35px] h-[24-px] text-[#fafafa] leading-[24px]">Cart</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[61px] h-[24-px] text-[#fafafa] leading-[24px]">Wishlist</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[41px] h-[24-px] text-[#fafafa] leading-[24px]">Shop</p>
      </div>
      <div>
      <h2 className="font-poppins mb-4 w-[101px] h-[28px] text-[20px] text-[#fafafa] font-[500] leading-[28px]">Quick Link</h2>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[109px] h-[24-px] text-[#fafafa] leading-[24px]">Privacy Policy</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[105px] h-[24-px] text-[#fafafa] leading-[24px]">Term Of Use</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[32px] h-[24-px] text-[#fafafa] leading-[24px]">FAQ</p>
        <p className="font-poppins mb-3 font-[400] text-[16px] w-[66px] h-[24-px] text-[#fafafa] leading-[24px]">Contact</p>
        
      </div>
      <div>
        <h2 className="font-poppins mb-4 w-[148px] h-[28px] text-[20px] text-[#fafafa] font-[500] leading-[28px]">Download App</h2>
      <p className="opacity-[70%] w-[194px] h-[18px] mb-2 leading-[18px] text-[12px] font-[500] font-poppins text-[#fafafa]">Save $3 with App New User Only</p>
      
      <div className="flex justify-evenly gap-3 ">
        <Image src="/images/Qrcode.png" alt="Qr-Code" width={100} height={100} 
      className="border-[2.5px] top-[2px] left-[2px] w-[76px] h-[76px] " />
      
      <div>
      <Image src="/images/google.png" alt="Google" width={100} height={100}
        className="text-[#ffffff] mb-2 w-[104px] h-[34px] rounded-[4px] border-[0.6px] top-[5px] left-[3px]"/>
        <Image src="/images/AppStore.png" alt="App-Store" width={100} height={100} 
        className="text-[#ffffff] w-[104px] mb-2 h-[34px] rounded-[4px] border-[0.6px] top-[5px] left-[3px]"/>
        </div>
      </div>
      <div className="flex justify-evenly gap-[24px] w-[168px] h-[24px] text-[#fafafa] mt-3 left-[-5px]">
      <FaFacebookF className="w-[24px] h-[24px]" />
      <FiTwitter className="text-[#ffffff] w-[27.06px] h-[24px] left-[-5px]"/>
      <FiInstagram className="text-[#ffffff] left-[3px] top-[3px] w-[18px] h-[18px] "/>
      <LiaLinkedinIn className="top-[3px] left-[3px] w-[17.5px] h-[17.5px] text-[#ffffff]"/>
      </div>
    </div>
    </div>
  );
};

export default Footer;
