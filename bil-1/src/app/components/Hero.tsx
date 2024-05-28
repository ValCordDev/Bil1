import React from 'react'
import { Alex_Brush } from 'next/font/google'
import { FaSearch } from "react-icons/fa";

const alexbrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})


const Hero = () => {
  return (
    <div className='w-screen h-screen bg-[url("https://i.imgur.com/JD5OK5Q.png")] bg-cover flex justify-center items-center'>
        <div className='gap-10'>
            <p className='text-center font-semibold'>Finn premium brukt-biler rundt deg</p>
            <h1 className={`text-[6rem] text-center my-5 ${alexbrush.className}`}>Finn din bil</h1>
            <div className='bg-slate-50 p-1 rounded-full flex justify-between items-center text-[#232323] gap-10 font-medium w-[50vw]'>
                <div className=' ml-28'><a href="#">Selskap</a></div>
                <div><a href="#">Biltype</a></div>
                <div className='hover:cursor-pointer'><a href="#">Priser</a></div>
                <a className='bg-blue-500 p-4 rounded-full text-white hover:cursor-pointer'><FaSearch /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero