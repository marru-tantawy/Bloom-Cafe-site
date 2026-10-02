import React from 'react'
import espresso from '../../assets/espresso.jpg'
import latte from '../../assets/latte.jpg'
import turkish from '../../assets/turkish.jpg'
import latte2 from '../../assets/latte.jpg'
export default function Menu() {
  const menu = [
  { name: 'Espresso', desc: 'Single Shot Espresso', price: '5.00', img: espresso },
  { name: 'Latte', desc: 'Single Shot Espresso with Milk', price: '7.05', img: latte },
  { name: 'Spanish Latte', desc: 'Double Shot Espresso with condensed milk', price: '8.70', img: latte2 },
  { name: 'Turkish Coffee', desc: 'Cup of Turkish coffee', price: '6.08', img: turkish },
];
  return (
    <>
      <div className='bg-[#d9d9bc] py-3 flex  flex-col'>
        <div className='flex items-center flex-col mx-14 my-3 '>
          <p className='text-sm'>OUR FAVOURITES</p>
          <div className='flex justify-between flex-col gap-2 md:flex-row items-center'>
            <h3 className='text-black text-3xl'>Featured Drinks</h3>
            <p className='text-[#4e5b41]'>View Full Menu </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-center  lg:justify-around  gap-8 my-4 p-3'>
  {menu.map((item) => (
    <div key={item.name} className='w-full max-w-64 py-3 flex flex-col'>
      <img className='w-full h-40 rounded-md object-cover' src={item.img} alt={item.name} />
      <div className='flex flex-col mt-2 flex-1'>
        <p className='font-bold'>{item.name}</p>
        <span>{item.desc}</span>
        <span className='bg-[#80966c] rounded-md p-2 mt-auto'>{item.price} $</span>
      </div>
    </div>
  ))}
</div>
      </div>
    </>
  )
}
