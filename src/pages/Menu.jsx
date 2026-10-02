import React from 'react'
import espresso from '../assets/espresso.jpg'
import latte from '../assets/latte.jpg'
import turkish from '../assets/turkish.jpg'
import latte2 from '../assets/latte.jpg'
import Hero from '../component/Hero/Hero'
import myImg1 from '../assets/sec-pic.jpg'
export default function Menu() {
  const parag = "OUR MENU"
  const mainText = `Fresh Flavors,
  Every Day`
  const description = "Good food, great coffee, happy moments";
  const menu = [
    { name: 'Espresso', desc: 'Single Shot Espresso', price: '5.00', img: espresso },
    { name: 'Latte', desc: 'Single Shot Espresso with Milk', price: '7.05', img: latte },
    { name: 'Spanish Latte', desc: 'Double Shot Espresso with condensed milk', price: '8.70', img: latte2 },
    { name: 'Turkish Coffee', desc: 'Cup of Turkish coffee', price: '6.08', img: turkish },
    { name: 'Espresso', desc: 'Single Shot Espresso', price: '5.00', img: espresso },
    { name: 'Latte', desc: 'Single Shot Espresso with Milk', price: '7.05', img: latte },
    { name: 'Spanish Latte', desc: 'Double Shot Espresso with condensed milk', price: '8.70', img: latte2 },
    { name: 'Turkish Coffee', desc: 'Cup of Turkish coffee', price: '6.08', img: turkish },
    { name: 'Espresso', desc: 'Single Shot Espresso', price: '5.00', img: espresso },
    { name: 'Latte', desc: 'Single Shot Espresso with Milk', price: '7.05', img: latte },
    { name: 'Spanish Latte', desc: 'Double Shot Espresso with condensed milk', price: '8.70', img: latte2 },
    { name: 'Turkish Coffee', desc: 'Cup of Turkish coffee', price: '6.08', img: turkish },
    { name: 'Latte', desc: 'Single Shot Espresso with Milk', price: '7.05', img: latte },
    { name: 'Spanish Latte', desc: 'Double Shot Espresso with condensed milk', price: '8.70', img: latte2 },
    { name: 'Turkish Coffee', desc: 'Cup of Turkish coffee', price: '6.08', img: turkish },
  ];
  
  return (
    <>
    <div className='bg-[beige] md:h-vh'>
      <div>
        <Hero p={parag} min={mainText} desc={description} wantbtn={false} myImg={myImg1}/>
        </div>
      <div className='flex flex-wrap justify-center gap-8 mt-4 p-3'>
  {menu.map((item) => (
    <div key={item.name} className='w-full max-w-64 py-3 flex flex-col'>
      <img className='w-full h-40 rounded-md object-cover' src={item.img} alt={item.name} />
      <div className='flex flex-col flex-1 mt-2'>
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
