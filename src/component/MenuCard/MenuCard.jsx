import React from 'react'
import img1 from '../../assets/sec-pic.jpg'
export default function MenuCard() {
  return (
    <>
      <div className='flex flex-col  md:flex-row justify-around  py-4 bg-[#f3f3d8]'>
        <div className='w-full p-2 md:w-fit '>
          <img src={img1} alt="" className='rounded-lg  w-2xl' />
        </div>
        <div className='flex flex-col p-2 text-md gap-3'>
          <p>About Bloom Cafe</p>
          <h2 className='font-bold text-5xl '>Our Story</h2>
          <span>
                Bloom Café started with a simple idea — to create a space where great coffee,<br />
                 good food and kind people come together. <br />
                  We believe in quality, community and the little moments that make life special.
          </span>
          <button className='p-2 rounded-lg bg-[olive] text-white cursor-pointer w-fit'>Learn More</button>
        </div>
      </div>
    </>
  )
}
