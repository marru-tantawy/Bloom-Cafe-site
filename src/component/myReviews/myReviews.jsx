import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import avatar1 from '../../assets/avatar-1 (2).jpg'
import avatar2 from '../../assets/avatar-2 (2).jpg'
import avatar3 from '../../assets/avatar-1.jpg'
export default function MYReviews() {
  const reviews = [
  { avatar: avatar1, text: "The best coffee in town! The atmosphere is so cozy and the staff is sudvddvper friendly. I love coming here!", name: "Sarah M." },
  { avatar: avatar2, text: "Amazing quality and such a peaceful place to work. Their matcha latte is my favorite!", name: "Omar K." },
  { avatar: avatar3, text: "Every visit feels special. The food is fresh, the coffee is perfect, and the vibe is just right. Highly recommend!", name: "Laila T." },
];
  return (
    <div className='bg-[#d9d9bc]'>
    <div className='flex flex-col gap-3 mx-8 py-3 '>
      <div className='flex justify-between my-3'>
        <div>
         <p className='text-sm'> WHAT OUR CUSTOMERS SAY</p>
         <p className='font-bold text-4xl'>Kind Words</p>
        </div>
        <div className='flex gap-3 '>
          <button  className='rounded-full px-2 border-2'>
          <FaChevronLeft  />
          </button>
          <button className='rounded-full px-2 border-2'>
          <FaChevronRight  />
          </button>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-3 p-3'>
  {reviews.map((r) => (
    <div key={r.name} className='bg-white rounded-md p-6 flex gap-3 w-full lg:w-1/3'>
      <img src={r.avatar} className='w-16 h-16 shrink-0 rounded-full object-cover' alt={r.name} />
      <div>
        <div className='flex'>
          {[...Array(5)].map((_, i) => <RiStarSFill key={i} />)}
        </div>
        <p>“{r.text}”</p>
        <p>{r.name}</p>
      </div>
    </div>
  ))}
</div>
    </div>
    </div>
  )
}
