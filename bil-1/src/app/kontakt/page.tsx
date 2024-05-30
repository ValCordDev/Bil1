'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

export default function kontakt() {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_pqzpzgc', 'template_m34n8co', form.current, {
          publicKey: '_jTzOc68G4nLq11qQ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Din melding er sendt!');
            router.push('../');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <main className='w-screen min-h-screen bg-slate-900'>
      <Navbar />
        <div className='flex justify-center p-24 flex-col gap-5'>
          <div className='flex flex-col justify-center text-center'>
            <span className='text-3xl font-bold p-10'>Kontakt oss</span>
            <span className='text-md font-normal p-2 gap-2'>Har du spørsmål eller bekymringer angående siden? Ta kontakt med oss!</span>
          </div>
          <div className='divider md:m-24'></div>
          <form ref={form} className='gap-5 md:mx-24 flex flex-col' >
            <div className='grid grid-cols-2 gap-5' onSubmit={sendEmail}>

              <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Navn" name='user_name' required />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                  <input type="mail" className="grow" placeholder="Mail" name='user_mail' required />
              </label>
            </div>
            <textarea className="textarea textarea-bordered w-full" placeholder="Spørsmål" name='user_message' required></textarea>
            <button className="btn btn-ghost input-bordered" onClick={sendEmail}>Send</button>
          </form>
        </div>
    </main>
  );
};