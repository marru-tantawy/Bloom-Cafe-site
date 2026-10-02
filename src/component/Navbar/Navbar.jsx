// import React from 'react'
// import { LuTreeDeciduous } from "react-icons/lu";
// import { FaSearch } from "react-icons/fa";
// import { Link } from 'react-router';

// export default function Navbar() {
//   return (
//     <>
//       <div className='flex justify-between bg-[beige] p-4 items-center'>
//         <div className='flex gap-4 items-center' >
//           <LuTreeDeciduous className='text-xl cursor-pointer' />
//           <span>Bloom Café</span>
//         </div>
//         <div>
//           <div className='flex gap-2 justify-between'>
//             <Link to="/" >Home</Link>
//            <Link to="/menu">Menu</Link>
//            <Link to="/about">About</Link>
//            <Link to="/reviews">Reviews</Link>
//            <Link to="/contact">Contact</Link>
//          </div>
//         </div>
//         <div className='flex gap-4 items-center'>
//           <FaSearch className='text-xl cursor-pointer'/>
//           <button className='text-white bg-[#4e5b41] rounded-xl p-2 cursor-pointer'>Order Now</button>
//         </div>
//       </div>
//     </>
//   )
// }
import React, { useState } from 'react'
import { LuTreeDeciduous } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'About', to: '/about' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-[beige]'>
      <div className='flex justify-between p-4 items-center'>
        {/* اللوجو */}
        <div className='flex gap-4 items-center'>
          <LuTreeDeciduous className='text-xl cursor-pointer' />
          <span>Bloom Café</span>
        </div>

        {/* اللينكات - ديسكتوب بس */}
        <div className='hidden md:flex gap-4'>
          {links.map((l) => (
            <Link key={l.name} to={l.to}>{l.name}</Link>
          ))}
        </div>

        {/* يمين */}
        <div className='flex gap-4 items-center'>
          <FaSearch className='text-xl cursor-pointer' />
          <button className='hidden md:block text-white bg-[#4e5b41] rounded-xl p-2 cursor-pointer'>
            Order Now
          </button>

          {/* التلات خطوط - موبايل بس */}
          <button
            className='md:hidden text-2xl cursor-pointer'
            onClick={() => setOpen(!open)}
            aria-label='Toggle menu'
          >
            {open ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>

      {/* الدروب داون - موبايل بس */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-4 px-4 pb-4'>
          {links.map((l) => (
            <Link key={l.name} to={l.to} onClick={() => setOpen(false)}>
              {l.name}
            </Link>
          ))}
          <button className='text-white bg-[#4e5b41] rounded-xl p-2 cursor-pointer'>
            Order Now
          </button>
        </div>
      </div>
    </nav>
  )
}
