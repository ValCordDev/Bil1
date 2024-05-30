'use client'

import { Alex_Brush } from 'next/font/google'
import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

import Logginn from './Logginn';
import Nylisting from './Nylisting';

const alexbrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
    const [user] = useAuthState(auth);
    const router = useRouter()

  return (
    <div className="navbar flex items-center absolute">
        <div className="flex-1">
            <a href="../" className={`btn btn-ghost text-3xl ${alexbrush.className}`}>Bil1</a>
        </div>
        {user ? (
            <div className="flex-none font-semibold">
                <ul className="menu menu-horizontal px-1">
                <li><a href='personvern'>TOS</a></li>
                <li><a href='kontakt'>Kontaktinformasjon</a></li>
                <li> {/* Ny listing */}
                    <button onClick={() => {
                        const modal = document.getElementById('NyListing') as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                        }}>Ny listing
                    </button>
                </li>
                {user ? (
                <li> {/* Profil */}
                <button onClick={() => router.push('/profil')}>Profil</button>
                </li>
                ) : (
                    <li> {/* Logg inn */}
                    <button onClick={() => {
                        const modal = document.getElementById('LoggInn') as HTMLDialogElement
                        if (modal) {
                        modal.showModal()
                        }
                    }}>Logg inn
                    </button>
                    </li>
                )}

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
        ): (
            <div className="flex-none font-semibold">
                <ul className="menu menu-horizontal px-1">
                <li><a href='personvern'>TOS</a></li>
                <li><a href='kontakt'>Kontaktinformasjon</a></li>

                <li> {/* Logg inn */}
                <button onClick={() => {
                    const modal = document.getElementById('LoggInn') as HTMLDialogElement
                    if (modal) {
                    modal.showModal()
                    }
                }}>Logg inn
                </button>
                </li>

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
        )}
    </div>
  )
}

export default Navbar