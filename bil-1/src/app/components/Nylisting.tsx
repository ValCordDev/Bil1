import React from 'react'
import { FaCar, FaCalendarAlt } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";

const Nylisting = () => {
  return (
    <div className="modal-box min-w-[35rem]">
        <div className='flex flex-col gap-5'>
            <h1 className={`text-xl text-center`}>Ny listing</h1>
            <div className='flex flex-row justify-between'>    
                <label className="input input-bordered flex items-center gap-2">
                    <FaCar className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Bilmerke" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <GiCarKey className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Bilmodell" required />
                </label>
            </div>
            <div className='flex flex-row justify-between'>
                <label className="input input-bordered flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Årsmodell" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <IoIosSpeedometer className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Kilometerstand" required />
                </label>
            </div>
            <div className='flex flex-row justify-between'>
                <select className="select select-bordered flex items-center gap-2 w-[15.4rem]">
                    <option disabled selected>Drivstoff</option>
                    <option>Bensin</option>
                    <option>Diesel</option>
                    <option>Elektrisitet</option>
                    <option>Elektrisitet + Bensin</option>
                    <option>Elektrisitet + Diesel</option>
                    <option>Gass + Bensin</option>
                    <option>Hydrogen</option>
                </select>
                <select className="select select-bordered flex items-center gap-2 w-[15.4rem]">
                    <option disabled selected>Girkasse</option>
                    <option>Manuell</option>
                    <option>Automat</option>
                </select>
            </div>

            <div className='gap-4'>
                <h1>Bilder av bilen:</h1>
                <input type="file" className="file-input min-w-full input-bordered" />
            </div>


            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="text" className="grow" placeholder="Pris (i NOK)" required />
            </label>
        
            <div className="divider"></div>

            <button className="btn btn-ghost input-bordered">Send inn listing</button>
        </div>
    </div>
  )
}

export default Nylisting