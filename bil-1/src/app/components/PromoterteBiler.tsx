import { Alex_Brush } from 'next/font/google'
import React from 'react'
import Image from 'next/image'

import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";

const alexbrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
  })

const PromoterteBiler = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-screen  p-24 bg-slate-50 flex-col'>
            <h1 className={`text-6xl ${alexbrush.className} text-[#232323] mb-20`}>Promoterte biler</h1>

            <div className='grid grid-cols-3 gap-5'>
                {/* Cards */}
                {/* Porsche 911 */}
                <div className=' border border-gray-400 rounded-[2rem] bg-slate-50'>
                    <Image src={'https://images.finncdn.no/dynamic/1600w/2024/4/vertical-0/07/6/347/331/506_dd33a943-372e-4a88-94e2-f4b3e1669a8c.jpg'} width={'450'} height={'400'} alt={''} className='rounded-t-[1.9rem]'></Image>
                    <div className='m-5'>
                        <h1 className='text-gray-950 font-medium text-xl'>Porsche 911 - 1991</h1>
                        <p className='text-gray-500 font-normal text-sm'>ST 964 RETRO</p>
                    </div>
                    <div className='divider m-6'></div>
                    <div className='w-full text-[#232323] my-5'>
                        <div className='grid grid-cols-3 w-full'>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                <p className='font-normal text-gray-600 text-sm'>0 KM</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                <p className='font-normal text-gray-600 text-sm'>Bensin</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                <p className='font-normal text-gray-600 text-sm'>Manuell</p>
                            </div>
                        </div>
                    </div>
                    <div className='divider m-3'></div>
                    <div className='w-full justify-between flex items-center pb-5 px-5 text-[#232323] font-bold'>
                        <p>5 280 000 kr</p>
                        <a href="#" className='text-blue-700 flex flex-row justify-center items-center gap-2'>Les mer <FaLocationArrow /></a>
                    </div>
                </div>

                {/* BMW M8 */}
                <div className=' border border-gray-400 rounded-[2rem] bg-slate-50'>
                    <Image src={'https://images.finncdn.no/dynamic/1280w/2024/4/vertical-0/21/7/346/563/207_9a14faf4-707c-42b1-a85c-1bb08da05e62.jpg'} width={'450'} height={'400'} alt={''} className='rounded-t-[1.9rem]'></Image>
                    <div className='m-5'>
                        <h1 className='text-gray-950 font-medium text-xl'>BMW M8 - 2022</h1>
                        <p className='text-gray-500 font-normal text-sm'>Competition Coupé, keramiske bremser, masse utstyr</p>
                    </div>
                    <div className='divider m-6'></div>
                    <div className='w-full text-[#232323] my-5'>
                        <div className='grid grid-cols-3 w-full'>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                <p className='font-normal text-gray-600 text-sm'>18 000 KM</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                <p className='font-normal text-gray-600 text-sm'>Bensin</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                <p className='font-normal text-gray-600 text-sm'>Automat</p>
                            </div>
                        </div>
                    </div>
                    <div className='divider m-3'></div>
                    <div className='w-full justify-between flex items-center pb-5 px-5 text-[#232323] font-bold'>
                        <p>1 919 990 kr</p>
                        <a href="#" className='text-blue-700 flex flex-row justify-center items-center gap-2'>Les mer <FaLocationArrow /></a>
                    </div>
                </div>

                {/* Rolls Royce Ghost */}
                <div className=' border border-gray-400 rounded-[2rem] bg-slate-50'>
                    <Image src={'https://images.finncdn.no/dynamic/1280w/2024/5/vertical-3/06/2/351/851/542_56629ec8-c9b5-4791-b69a-56d14412916c.jpg'} width={'450'} height={'200'} alt={''} className='rounded-t-[1.9rem]'></Image>
                    <div className='m-5'>
                        <h1 className='text-gray-950 font-medium text-xl'>Rolls Royce Ghost - 2011</h1>
                        <p className='text-gray-500 font-normal text-sm'>V12 ACC, Nattkamera, Sideview, Head-up,Navi, TV Bak</p>
                    </div>
                    <div className='divider m-6'></div>
                    <div className='w-full text-[#232323] my-5'>
                        <div className='grid grid-cols-3 w-full'>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                <p className='font-normal text-gray-600 text-sm'>24 800 KM</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                <p className='font-normal text-gray-600 text-sm'>Bensin</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                <p className='font-normal text-gray-600 text-sm'>Automat</p>
                            </div>
                        </div>
                    </div>
                    <div className='divider m-3'></div>
                    <div className='w-full justify-between flex items-center pb-5 px-5 text-[#232323] font-bold'>
                        <p>1 598 000 kr</p>
                        <a href="#" className='text-blue-700 flex flex-row justify-center items-center gap-2'>Les mer <FaLocationArrow /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromoterteBiler