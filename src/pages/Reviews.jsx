import React from 'react'
import Hero from '../component/Hero/Hero';
import myImg1 from '../assets/revs.jpg'
 import MyReviews from '../component/myReviews/myReviews';

export default function Reviews() {
    const parag = "WHAT OUR CUSTOMERS SAY"
  const mainText = `Kind Words`
  const description = <> Real people. Real moments. Real coffee. </>
  return (
    <div>
      <Hero p={parag} min={mainText} desc={description} wantbtn={false} myImg={myImg1} />
      <MyReviews/>
      <MyReviews/>
      <MyReviews/>
    </div>
  )
}
