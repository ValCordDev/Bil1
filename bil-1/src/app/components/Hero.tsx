import React from 'react'
import { Alex_Brush } from 'next/font/google'
import { FaSearch } from "react-icons/fa";


const alexbrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})


const Hero = () => {
  return (
    <div className='w-screen h-screen bg-[url("https://i.imgur.com/JD5OK5Q.png")] bg-cover flex justify-center items-center m-0'>
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
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">Drivstoff</div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
                    <div className="card-body">
                      <input type="text" className="input text-white" placeholder="Velg her" list="drivstoff"/>
                      <datalist id="drivstoff">
                        <option value="Bensin"/>
                        <option value="Diesel"/>
                        <option value="Elektrisitet"/>
                        <option value="Elektrisitet + Bensin"/>
                        <option value="Elektrisitet + Diesel"/>
                        <option value="Gass + Bensin"/>
                        <option value="Hydrogen"/>
                      </datalist>
                    </div>
                  </div>
                </div>
                
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-center">
                  <div tabIndex={0} role="button" className="btn btn-ghost m-1">Priser</div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-sm z-1 w-96 shadow-md bg-base-100">
                    <div className="card-body">
                      <p className='text-white'>eee</p>
                    </div>
                  </div>
                </div>
                <a className='bg-blue-500 p-4 rounded-full text-white hover:cursor-pointer'><FaSearch /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero