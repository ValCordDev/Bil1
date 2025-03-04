'use client'
import { Alex_Brush } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";

const alexbrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
  })

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "bilerTilSalgs"))

    const data: { id: string }[] = [];
    querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
    });
    return data;
}


const PromoterteBiler = () => {

    const [userData, setUserData] = useState<{ id: string }[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setUserData(data);
        }
        fetchData();
    }, [])

  return (
    <div>
        <div className='flex justify-center items-center w-screen  p-24 bg-slate-50 flex-col'>
            <h1 className={`text-6xl ${alexbrush.className} text-[#232323] mb-20`}>Promoterte biler</h1>

            <div className='grid grid-cols-3 gap-5'>
                {userData.map((bil) => (
                    <div key={bil.id} className='border border-gray-400 rounded-[2rem] bg-slate-50'>
                        <Image src={(bil as { id: string; image: string }).image} width={'450'} height={'400'} alt={''} className='rounded-t-[1.9rem]'></Image>
                    <div className='m-5'>
                        <h1 className='text-gray-950 font-medium text-xl'>{(bil as { id: string; brand: string }).brand} {(bil as { id: string; model: string }).model}</h1>
                        <p className='text-gray-500 font-normal text-sm'>{(bil as { id: string; year: string }).year}</p>
                    </div>

                    <div className='divider m-6'></div>

                    <div className='w-full text-[#232323] my-5'>
                        <div className='grid grid-cols-3 w-full'>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                <p className='font-normal text-gray-600 text-sm'>{(bil as { id: string; kilometer: string }).kilometer.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} KM</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                <p className='font-normal text-gray-600 text-sm'>{(bil as { id: string; fuel: string }).fuel}</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                <p className='font-normal text-gray-600 text-sm'>{(bil as { id: string; gearbox: string }).gearbox}</p>
                            </div>
                        </div>
                    </div>
                    <div className='divider m-3'></div>
                        <div className='w-full justify-between flex items-center pb-5 px-5 text-[#232323] font-bold'>
                            <p>{(bil as { id: string; price: string }).price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr</p>
                            <a href="#" className='text-blue-700 flex flex-row justify-center items-center gap-2'>Listing av: {(bil as { id: string; publisherName: string }).publisherName} <FaLocationArrow /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PromoterteBiler