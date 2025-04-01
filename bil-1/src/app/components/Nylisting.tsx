'use client'

import React, {useState} from 'react'
import { FaCar, FaCalendarAlt } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';


async function addDataToFireStore(user: any, brand: string, model: string, year: string, kilometer: string, image: string, fuel: string, gearbox: string, price: string): Promise<boolean> {
    
    try {
        const docRef = await addDoc(collection(db, "bilerTilSalgs"), {
            publisher: user.uid,
            publisherName: user.displayName,
            brand: brand,
            model: model,
            year: year,
            kilometer: kilometer,
            image: image,
            fuel: fuel,
            gearbox: gearbox,
            price: price
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

const Nylisting = () => {
    const [user] = useAuthState(auth);
    
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [kilometer, setKilometer] = useState('');
    const [image, setImage] = useState('');
    const [fuel, setFuel] = useState('');
    const [gearbox, setGearbox] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const added = await addDataToFireStore(user, brand, model, year, kilometer, image, fuel, gearbox, price);
        if (added) {
            setBrand('');
            setModel('');
            setYear('');
            setKilometer('');
            setImage('');
            setFuel('');
            setGearbox('');
            setPrice('');

            alert('Stuff is now added to DB');
        }
    }

  return (
    <div className="modal-box min-w-[40rem]">
        <div className='flex flex-col gap-5'>
            <h1 className={`text-xl text-center`}>Ny listing</h1>
            <div className='flex flex-row justify-between'>    
                <label className="input input-bordered flex items-center gap-2">
                    <FaCar className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Bilmerke" required value={brand} onChange={(e) => setBrand(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <GiCarKey className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Bilmodell" required value={model} onChange={(e) => setModel(e.target.value)} />
                </label>
            </div>
            <div className='flex flex-row justify-between'>
                <label className="input input-bordered flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Årsmodell" required value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <IoIosSpeedometer className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Kilometerstand" required value={kilometer} onChange={(e) => setKilometer(e.target.value)} />
                </label>
            </div>
            <div className='flex flex-row justify-between'>
                <select className="select select-bordered flex items-center gap-2 w-[15.4rem]" value={fuel} onChange={(e) => setFuel(e.target.value)} required>
                    <option value="" disabled>Drivstoff</option>
                    <option value="Bensin">Bensin</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Elektrisitet">Elektrisitet</option>
                    <option value="Elektrisitet + Bensin">Elektrisitet + Bensin</option>
                    <option value="Elektrisitet + Diesel">Elektrisitet + Diesel</option>
                    <option value="Gass + Bensin">Gass + Bensin</option>
                    <option value="Hydrogen">Hydrogen</option>
                </select>
                <select className="select select-bordered flex items-center gap-2 w-[15.4rem]" value={gearbox} onChange={(e) => setGearbox(e.target.value)} required>
                    <option value="" disabled>Girkasse</option>
                    <option value="Manuell">Manuell</option>
                    <option value="Automat">Automat</option>
                </select>
            </div>

            <div className='input input-bordered flex items-center gap-2'>
                <input type="text" className="grow" placeholder="Bilde av bilen (Linkformat)" required value={image} onChange={(e) => setImage(e.target.value)} />
            </div>     

            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="text" className="grow" placeholder="Pris (i NOK)" required value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
        
            <div className="divider"></div>

            <button className="btn btn-ghost input-bordered" onClick={handleSubmit}>Send inn listing</button>
        </div>
    </div>
  )
}

export default Nylisting