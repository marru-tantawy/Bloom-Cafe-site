import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

export default function Features() {
  return (
    <>
      <div className='bg-[beige] flex flex-col flex-wrap md:flex-row justify-around items-center '>
        <div className=' flex flex-col items-center my-6 md:w-1/2 lg:w-1/4'>
            <div className='p-4 rounded-full w-fit bg-[#4e5b41] text-white text-xl'>
                <GiCoffeeCup />
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-xl'>Premium Quality</p>
                <span className='text-center text-sm'>Carefully selected beans <br />and fresh ingredients</span>
            </div>
        </div>
        <div className=' flex flex-col items-center my-6 md:w-1/2 lg:w-1/4'>
            <div className='p-4 rounded-full w-fit  bg-[#4e5b41] text-white text-xl'>
                <RiLeafLine />

            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-xl'>Fresh & Healthy</p>
                <span className='text-center text-sm'>Delicious options for <br />every lifestyle</span>
            </div>
        </div>
        <div className=' flex flex-col items-center my-6 md:w-1/2 lg:w-1/4 '>
            <div className='p-4 rounded-full w-fit  bg-[#4e5b41] text-white text-xl'>
                <FaRegHeart />
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-xl'>Cozy Atmosphere</p>
                <span className='text-center text-sm'>A perfect place to relax, <br />work or meet.</span>
            </div>
        </div>
        <div className=' flex flex-col items-center my-6 md:w-1/2 lg:w-1/4'>
            <div className='p-4 rounded-full w-fit  bg-[#4e5b41] text-white text-xl'>
                <IoStarOutline />
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-xl'>Great Services</p>
                <span className='text-center text-sm'>Friendly faces <br />we're always here for you</span>
            </div>
        </div>
        
      </div>
    </>
  )
}
