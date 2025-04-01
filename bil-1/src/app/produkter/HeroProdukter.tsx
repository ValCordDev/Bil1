import React from 'react'
import { Alex_Brush } from 'next/font/google'
import { FaSearch } from "react-icons/fa";


const alexbrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})


const HeroProdukter = () => {
  return (
    <div className='h-screen bg-[url("https://i.imgur.com/JD5OK5Q.png")] bg-cover flex justify-center items-center m-0 start-72'>
        <div className='gap-10'>
            <h1 className={`text-[6rem] text-center my-5 ${alexbrush.className}`}>Produkter</h1>
        </div>
    </div>
  )
}

export default HeroProdukter