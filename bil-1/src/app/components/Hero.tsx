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
                <div className=" ml-28 dropdown dropdown-hover dropdown-bottom dropdown-center">
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">Selskap</div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
                    <div className="card-body">
                      <input type="text" className="input text-white" placeholder="Bilselskap" list="selskaper"/>
                      <datalist id="selskaper">
                        <option value="Aston Martin"/>
                        <option value="Bentley"/>
                        <option value="Lexus"/>
                        <option value="Porsche"/>

                      </datalist>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-center">
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">Biltype</div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
                    <div className="card-body">
                      <input type="text" className="input text-white" placeholder="Bilselskap" list="selskaper"/>
                      <datalist id="selskaper">
                        <option value="Aston Martin"/>
                        <option value="Bentley"/>
                        <option value="Lexus"/>
                        <option value="Porsche"/>

                      </datalist>
                    </div>
                  </div>
                </div>
                <div className='hover:cursor-pointer'><a href="#">Priser</a></div>
                
                <a className='bg-blue-500 p-4 rounded-full text-white hover:cursor-pointer'><FaSearch /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero