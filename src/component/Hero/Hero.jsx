import React, { useState } from 'react'
import  myBg from "..//../assets/hero-pic.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
export default function Hero({p , min , desc , wantbtn , myImg}) {
  const [wantButton, setwantButton] = useState(wantbtn)
  return (
    <>
    <div className='bg-cover h-100  text-white p-6 flex items-center'  style={{ backgroundImage: `url(${myImg})` }}>
        <div>
          <p className='font-bold text-lg'>{p}</p>
        <h2 className='text-4xl font-bold'>{min}</h2>
        <p className='my-3'>{desc}</p>

        {wantButton ? <div className='flex gap-4 p-2 my-4'>
          <button className='flex gap-2 items-center bg-[beige] text-black p-2 rounded-md'>Explore Our Menu <FaLongArrowAltRight /></button>
          <button className='flex gap-2 items-center bg-[#4e5b41] text-[beige] p-2 rounded-md'>Visit Us <IoLocationOutline /></button>
        </div> : ""}
        </div>
      </div>
    </>
  )
}
