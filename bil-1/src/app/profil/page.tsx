'use client'

import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { Alex_Brush } from 'next/font/google';

import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";
import Navbar from '../components/Navbar';

const alexbrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
})


async function fetchUserListings(userUid: string) {
    const q = query(collection(db, "bilerTilSalgs"), where("publisher", "==", userUid));
    const querySnapshot = await getDocs(q);

    const listings: { id: string }[] = [];
    querySnapshot.forEach((doc) => {
        listings.push({id: doc.id, ...doc.data()});
    });
    return listings;

}

export default function profil() {

    const [user] = useAuthState(auth);
    const router = useRouter();
    const [listings, setListings] = useState<{ id: string }[]>([]);

    useEffect(() => {
        if (user) {
            fetchUserListings(user.uid).then(setListings);
        } else {
            router.push('../')
        }
    }, [user, router]);

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
        return null;
    }

  return (
    <main className='w-screen min-h-screen bg-[url("https://i.imgur.com/gzq4eSq.jpeg")] bg-cover flex justify-center'>
        <Navbar />

        <div className='flex flex-col gap-5 p-24'>
            <h1 className={`text-7xl text-center ${alexbrush.className}`}>Din Profil</h1>
            <h2 className='text-lg font-bold text-center'>Brukernavn: {user?.displayName}</h2>
            <h2 className='text-lg font-bold text-center'>Mail: {user?.email}</h2>

            <button className="btn btn-ghost input-bordered" onClick={handleSignout}>Logg ut</button>

            <div className='divider'></div>
            <h1 className={`text-6xl text-center ${alexbrush.className}`}>Listet produkter:</h1>

            <div className='grid grid-cols-3 gap-5'>
                {listings.length === 0 ? (
                    <p className='text-center font-bold text-lg text-white'>Ingen produkter funnet.</p>
                ) : (
                    listings.map((listing) => (
                        <div key={listing.id} className='border border-gray-400 rounded-[2rem] bg-transparent'>
                            <Image src={(listing as { id: string; image: string }).image} width={'450'} height={'400'} alt={''} className='rounded-t-[1.9rem]'></Image>
                            <div className='m-5'>
                                <h1 className='text-gray-50 font-medium text-xl'>{(listing as { id: string; brand: string }).brand} - {(listing as { id: string; year: string }).year}</h1>
                                <p className='text-gray-400 font-normal text-sm'>{(listing as { id: string; model: string }).model}</p>
                            </div>
                            <div className='divider m-6'></div>
                            <div className='w-full text-slate-50 my-5'>
                                <div className='grid grid-cols-3 w-full'>
                                    <div className='flex justify-center items-center flex-col gap-2'>
                                        <p className='font-semibold text-4xl'><IoIosSpeedometer /></p>
                                        <p className='font-normal text-gray-400 text-sm'>{(listing as { id: string; kilometer: string }).kilometer.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} KM</p>
                                    </div>
                                    <div className='flex justify-center items-center flex-col gap-2'>
                                        <p className='font-semibold text-4xl'><BsFillFuelPumpFill /></p>
                                        <p className='font-normal text-gray-400 text-sm'>{(listing as { id: string; fuel: string }).fuel}</p>
                                    </div>
                                    <div className='flex justify-center items-center flex-col gap-2'>
                                        <p className='font-semibold text-4xl'><TbManualGearbox /></p>
                                        <p className='font-normal text-gray-400 text-sm'>{(listing as { id: string; gearbox: string }).gearbox}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='divider m-3'></div>
                            <div className='w-full justify-between flex items-center pb-5 px-5 text-slate-50 font-bold'>
                                <p>{(listing as { id: string; price: string }).price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    </main>
  );
}