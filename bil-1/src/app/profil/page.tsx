'use client'

import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

import { Alex_Brush } from 'next/font/google';

import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";
import Navbar from '../components/Navbar';

const alexbrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})

export default function profil() {

    const [user] = useAuthState(auth);
    const router = useRouter();

    const handleSignout = async () => {
        try {
            await signOut(auth);
            router.push('../');
        } catch (e) {
            console.error(e);
        }
    }

    if (!user) {
        router.push('../');
    }

  return (
    <main className='w-screen min-h-screen bg-[url("https://i.imgur.com/gzq4eSq.jpeg")] bg-cover flex justify-center'>
        <Navbar />

        <div className='flex flex-col gap-5 p-24'> {/* bg-slate-950 p-20 rounded-3xl */}
            <h1 className={`text-7xl text-center ${alexbrush.className}`}>Din Profil</h1>
            <p className='text-lg font-bold text-center'>Brukernavn: {user?.displayName}</p>
            <p className='text-lg font-bold text-center'>Mail: {user?.email}</p>

            <button className="btn btn-ghost input-bordered" onClick={handleSignout}>Logg ut</button>

            <div className='divider'></div>
            <h1 className={`text-6xl text-center ${alexbrush.className}`}>Listet produkter:</h1>

            {/* BMW M8 */}
            <div className=' border border-gray-400 rounded-[2rem] bg-transparent'>
                    <Image src={'https://images.finncdn.no/dynamic/1280w/2024/4/vertical-0/21/7/346/563/207_9a14faf4-707c-42b1-a85c-1bb08da05e62.jpg'} width={'450'} height={'400'} alt={''} className='rounded-t-[1.9rem]'></Image>
                    <div className='m-5'>
                        <h1 className='text-gray-50 font-medium text-xl'>BMW M8 - 2022</h1>
                        <p className='text-gray-400 font-normal text-sm'>Competition Coupé, keramiske bremser, masse utstyr</p>
                    </div>
                    <div className='divider m-6'></div>
                    <div className='w-full text-slate-50 my-5'>
                        <div className='grid grid-cols-3 w-full'>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                <p className='font-normal text-gray-400 text-sm'>18 000 KM</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                <p className='font-normal text-gray-400 text-sm'>Bensin</p>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2'>
                                <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                <p className='font-normal text-gray-400 text-sm'>Automat</p>
                            </div>
                        </div>
                    </div>
                    <div className='divider m-3'></div>
                    <div className='w-full justify-between flex items-center pb-5 px-5 text-slate-50 font-bold'>
                        <p>1 919 990 kr</p>
                    </div>
                </div>
        </div>
    </main>
  );
}