import { LuTreeDeciduous } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router';
import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
  return (
     <>
      <div className='flex justify-between bg-[#4e5b41] text-white p-4 items-center  '>
        <div className='flex gap-4 items-center' >
          <LuTreeDeciduous className='text-xl cursor-pointer' />
          <span>Bloom Café</span>
        </div>
        <div>
          
        </div>
        <div >
          <div className='flex gap-2 justify-between text-xl items-center'>
            <Link className="p-2 rounded-full bg-[beige] text-black" to="/" ><TiSocialFacebook /></Link>
           <Link className="p-2 rounded-full bg-[beige] text-black" to="/"><TiSocialYoutube /></Link>
           <Link className="p-2 rounded-full bg-[beige] text-black" to="/"><SlSocialInstagram /></Link>
           <Link className="p-2 rounded-full bg-[beige] text-black" to="/"><SlSocialLinkedin /></Link>
           
         </div>
        </div>
      </div>
    </>
  )
}



