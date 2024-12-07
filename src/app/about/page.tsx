import React from 'react';
import Image from 'next/image';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

// Define types for the StatisticCard props
interface StatisticCardProps {
  icon: React.ReactNode;
  count: string;
  label: string;
  bgColor?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ icon, count, label, bgColor = "bg-white" }) => {
  return (
    <div className={`border-2 rounded-[4px] space-y-3 ${bgColor} border-[#d6d5d5f5] w-[230px] h-[200px]`}>
      <button className='rounded-full border-4 ml-[36%] mt-10 w-[55px] h-[55px] p-3 border-gray-300'>
        {icon}
      </button>
      <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px]'>{count}</h2>
      <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-24px text-center'>{label}</p>
    </div>
  );
};

// AboutPage Component (Main Default Export)
const AboutPage = () => {
  return (
    <div className='max-w-[1440px] w-full'>
      {/* Breadcrumb Navigation */}
      <div className='ml-[150px] pt-[70px]'>
        <ul className='flex gap-2 w-[114px] h-[24px]'>
          <li className='w-[42px] h-[21px] font-poppins font-normal text-[14px] opacity-[50%]'>Home</li>
          <span>/</span>
          <li className='w-[42px] h-[21px] font-poppins font-normal text-[14px]'>About</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className='flex max-w-[1440px] ml-24'>
        {/* Text Section */}
        <div className='w-[525px] h-[336px] mt-[50px] pl-[15px] gap-[40px]'>
          <h2 className='font-inter font-semibold text-[54px] text-left h-[64px] w-[277px] mb-6'>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
            and serves 3 million customers across the region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment
            in categories ranging from consumer goods to fashion and electronics.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/images/about.png"
            alt="about"
            width={1000}
            height={1000}
            className='rounded-[4px] ml-[40px] w-[600px] h-[400px]'
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className='ml-[150px]'>
        <div className='w-[1050px] flex h-[230px] mt-6 gap-[30px]'>
          {/* Statistic Cards */}
          <StatisticCard
            icon={<SiHomeassistantcommunitystore size="28px" />}
            count="10.5k"
            label="Sellers active on our site"
          />
          <StatisticCard
            icon={<AiOutlineDollarCircle size="28px" />}
            count="33k"
            label="Monthly Product Sales"
            bgColor="bg-[#DB4444]"
          />
          <StatisticCard
            icon={<IoBagHandle size="28px" />}
            count="10.5k"
            label="Products Sold"
          />
          <StatisticCard
            icon={<TbMoneybag size="28px" />}
            count="10.5k"
            label="Happy Customers"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
