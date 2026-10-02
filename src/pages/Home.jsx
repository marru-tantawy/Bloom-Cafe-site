import React from 'react'

import Hero from './../component/Hero/Hero';
import Features from '../component/Features/Features';
import Menu from '../component/Menu/Menu';
import MenuCard from '../component/MenuCard/MenuCard';
import MyReviews from '../component/myReviews/MyReviews';
import Form from './../component/Form/Form';
import myImg1 from '../assets/hero-pic.jpg'
export default function Home() {
  const parag = "GOOD COFFEE . FRESH VIBES";
  const description = "Freshly brewed coffee, cozy moments, and sweet things made with love."
  const mainText = (
  <>
    More Than Coffee, <br />
    It's a Lifestyle
  </>
);
  return (
    <div className='bg-[#F8F6EF]'>
      <div className=''>
      <Hero p={parag} min={mainText} desc={description} wantbtn={"true"} myImg={myImg1}/>
      <Features/>
      <Menu/>
      <MenuCard/>
      <MyReviews/>
      <Form/>
      </div>
    </div>
  )
}
