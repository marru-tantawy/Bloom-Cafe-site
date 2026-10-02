import React from 'react'
import Hero from '../component/Hero/Hero';
import myImg1 from '../assets/edc035fa0d6d1d0ac9d570ee0b68163b.jpg'
import Features from '../component/Features/Features';
import MenuCard from '../component/MenuCard/MenuCard';
import myImg2 from '../assets/cafe-pic2.jpg'
export default function About() {
  const parag = "ABOUT BLOOM CAFÉ"
  const mainText = `Our Story`
  const description = <> Bloom Café started with a simple idea 
  <br /> to create a space where great coffee, good food and kind people come together. </>
   

  return (
    <div className='bg-[beige]'>
      <Hero p={parag} min={mainText} desc={description} wantbtn={true} myImg={myImg1}/>
      <Features/>
      <MenuCard/>
      <section class="px-6 py-16 sm:px-10 lg:px-16">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
 
    
    <div>
      <h2 class="mb-10 text-3xl font-bold text-slate-900 sm:text-4xl">
        Our Journey
      </h2>
 
      <ol>
       
        <li class="relative flex gap-5 pb-10">
          <div class="flex flex-col items-center">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f4a3c]">
              <span class="h-2 w-2 rounded-full bg-[#f2ede1]"></span>
            </span>
            <span class="mt-1 w-px flex-1 bg-slate-400/50"></span>
          </div>
          <div class="pt-0.5">
            <span class="mb-1 block text-sm font-semibold text-slate-500">2020</span>
            <h3 class="text-lg font-bold text-slate-900">The idea</h3>
            <p class="mt-1 text-slate-500">It all started with a dream and a love for coffee.</p>
          </div>
        </li>
 
       
        <li class="relative flex gap-5 pb-10">
          <div class="flex flex-col items-center">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f4a3c]">
              <span class="h-2 w-2 rounded-full bg-[#f2ede1]"></span>
            </span>
            <span class="mt-1 w-px flex-1 bg-slate-400/50"></span>
          </div>
          <div class="pt-0.5">
            <span class="mb-1 block text-sm font-semibold text-slate-500">2021</span>
            <h3 class="text-lg font-bold text-slate-900">Our first location</h3>
            <p class="mt-1 text-slate-500">A small café with a big heart.</p>
          </div>
        </li>
 
        
        <li class="relative flex gap-5 pb-10">
          <div class="flex flex-col items-center">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f4a3c]">
              <span class="h-2 w-2 rounded-full bg-[#f2ede1]"></span>
            </span>
            <span class="mt-1 w-px flex-1 bg-slate-400/50"></span>
          </div>
          <div class="pt-0.5">
            <span class="mb-1 block text-sm font-semibold text-slate-500">2023</span>
            <h3 class="text-lg font-bold text-slate-900">Growing together</h3>
            <p class="mt-1 text-slate-500">More people, more stories, more good coffee.</p>
          </div>
        </li>
 
       
        <li class="relative flex gap-5">
          <div class="flex flex-col items-center">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f4a3c]">
              <span class="h-2 w-2 rounded-full bg-[#f2ede1]"></span>
            </span>
          </div>
          <div class="pt-0.5">
            <span class="mb-1 block text-sm font-semibold text-slate-500">Today</span>
            <h3 class="text-lg font-bold text-slate-900">Still blooming</h3>
            <p class="mt-1 text-slate-500">And we're just getting started...</p>
          </div>
        </li>
      </ol>
    </div>
 
   
    <div class="relative h-[380px] w-full overflow-hidden rounded-2xl sm:h-[440px]">
      <img
        src={myImg2}
        alt="Bloom Café storefront"
        class="h-full w-full object-cover"
      />
    </div>
 
  </div>
</section>
    </div>
  )
}
