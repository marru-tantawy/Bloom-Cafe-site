import React from 'react'
import drink from '../../assets/latte.jpg'
import { useForm } from "react-hook-form"
import { Link } from 'react-router';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoLocationOutline } from 'react-icons/io5';
import { CgMail } from 'react-icons/cg';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Form() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    
    <>
      <div className='bg-[beige] flex flex-col md:flex-row justify-around items-center py-3 gap-3'>
            <div className='p-2'>
                <p>GET IN TOUCH</p>
                <p className='text-4xl font-bold'>We'd Love to Hear From You</p>
                <div className='flex flex-col gap-3 my-2'>
                    <p className='flex gap-2 items-center'> <IoLocationOutline /> 123 Garden Street, Cairo, Egypt</p>
                    <p className='flex gap-2 items-center'> <FaPhoneAlt /> +20 010 1234 5678</p>
                    <p className='flex gap-2 items-center'> <CgMail /> hello@bloomcafe.com</p>
                    <div className='flex  justify-start gap-1 items-center'>
                            <Link className="p-2 rounded-full bg-[beige] text-black border" to="/" ><TiSocialFacebook /></Link>
                            <Link className="p-2 rounded-full bg-[beige] text-black border" to="/"><TiSocialYoutube /></Link>
                            <Link className="p-2 rounded-full bg-[beige] text-black border" to="/"><SlSocialInstagram /></Link>
                            <Link className="p-2 rounded-full bg-[beige] text-black border" to="/"><SlSocialLinkedin /></Link>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <form className="flex gap-4 flex-col">
                    <div className='flex gap-2'>
                        <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>
                    </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows="5"
          className="w-full border rounded-md px-4 py-2 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="rounded-md px-6 py-2 bg-[#d0d0b1]"
      >
        Send Message
      </button>
                </form>
            </div>
            <div className='p-2'>
                <img src={drink} className='w-50 rounded-2xl' alt="" />
            </div>
      </div>
    </>
  )
}
