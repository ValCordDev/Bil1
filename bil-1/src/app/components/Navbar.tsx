'use client'

import { Alex_Brush } from 'next/font/google'
import React from 'react'

import Logginn from './Logginn';
import Nylisting from './Nylisting';

const alexbrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
  return (
    <div className="navbar flex items-center absolute">
        <div className="flex-1">
            <a className={`btn btn-ghost text-3xl ${alexbrush.className}`}>Bil1</a>
        </div>
        <div className="flex-none font-semibold">
            <ul className="menu menu-horizontal px-1">
            <li><a>TOS</a></li>
            <li><a>Kontakt</a></li>
            <li><button onClick={() => {
                const modal = document.getElementById('LoggInn') as HTMLDialogElement;
                if (modal) {
                    modal.showModal();
                }
            }}>Logg inn</button></li>
            <li><button onClick={() => {
                const modal = document.getElementById('NyListing') as HTMLDialogElement;
                if (modal) {
                    modal.showModal();
                }
            }}>Ny listing</button></li>

            <dialog id="LoggInn" className="modal">
                <Logginn />
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="NyListing" className="modal">
                <Nylisting />
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            </ul>
        </div>
    </div>
  )
}

export default Navbar