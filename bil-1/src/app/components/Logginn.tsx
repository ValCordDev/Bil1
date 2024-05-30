'use client'

import { FaGoogle, FaApple } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Logginn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleAuth = new GoogleAuthProvider();
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const login = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuth);
            console.log(res);
            router.push('profil');
        } catch (e) {
            console.error(e);
        }
    }

    const handleSignin = async () => {
        try {
            const res = await signInWithEmailAndPassword(email, password)
            console.log(res)
            setEmail('');
            setPassword('');
            router.push('profil');
        } catch (e) {
            console.error(e);
        }
    }

  return (
    <div className="modal-box">
        <div className='flex flex-col gap-5'>
            <h1 className={`text-xl text-center`}>Logg inn for å fortsette</h1>

            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" className="grow" placeholder="Mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="Passord" required value={password} onChange={(e) => setPassword(e.target.value)}  />
            </label>
            
            <button className="btn btn-ghost input-bordered" onClick={handleSignin}>Logg inn</button>

            <div className="divider">ELLER</div>

            <button className="btn btn-ghost input-bordered" onClick={login}><FaGoogle /> Logg inn med Google</button>

            <p>Ingen bruker enda? <a className='text-blue-500 underline underline-offset-1' href='signup'>Lag ny bruker</a></p>
        </div>
    </div>
  )
}

export default Logginn