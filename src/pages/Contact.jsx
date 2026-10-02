import React from 'react'
import Form from './../component/Form/Form';
import Hero from './../component/Hero/Hero';
import myImg from '../assets/cafe-pic.jpg'
export default function Contact() {
   const parag = "GOOD COFFEE . FRESH VIBES";
  const description = "Freshly brewed coffee, cozy moments, and sweet things made with love."
  const mainText = (
  <>
    More Than Coffee, <br />
    It's a Lifestyle
  </>
  )
  return (
    <div className='bg-[beige] md:h-screen '>
      <Hero p={parag} min={mainText} desc={description} wantbtn={"true"} myImg={myImg}/>
      <Form/>
    </div>
  )
}
