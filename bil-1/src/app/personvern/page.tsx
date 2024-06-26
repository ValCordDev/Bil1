'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function tos() {
  return (
    <main className='w-screen text-white overflow-x-hidden bg-slate-900'>
        <Navbar />
        <div className='flex justify-center p-24'>
            <div className='flex flex-col justify-center text-center'>
                <span className='text-3xl font-bold p-10'>Personvernerklæring</span>

                <span className='text-md font-normal p-2 gap-2'>Din personlige integritet er viktig for oss hos Bil1. Denne personvernerklæringen forklarer hvordan vi samler inn, bruker, deler og beskytter dine personopplysninger.</span>
                
                <span className='text-xl font-bold p-10'>1. Innhenting av Personopplysninger</span>
                <span className='text-md font-normal p-2 gap-2'>1.1 <span className='font-bold'>Informasjon vi samler</span>: Vi samler inn informasjon du gir oss frivillig, som navn, kontaktinformasjon, og annen relevant informasjon når du registrerer deg for å bruke våre tjenester. <br /><br /><span className='font-bold'>1.2 Informasjon fra tredjeparter</span>: Vi kan motta informasjon fra tredjeparter, for eksempel myndigheter som gir oss støtte, for å administrere våre tjenester.</span>

                <span className='text-xl font-bold p-10'>2. Bruk av Personopplysninger</span>
                <span className='text-md font-normal p-2 gap-2'>2.1 <span className='font-bold'>Tjenesteadministrasjon</span>: Vi bruker dine personopplysninger for å administrere og tilby våre tjenester, inkludert auksjoner på biler og kommunikasjon med deg. <br /> <br />2.2 <span className='font-bold'>Statistikk og Analyse</span>: Vi kan bruke anonymiserte data til statistiske formål og for å forbedre våre tjenester.</span>

                <span className='text-xl font-bold p-10'>3. Deling av Personopplysninger</span>
                <span className='text-md font-normal p-2 gap-2'>3.1 <span className='font-bold'>Tredjeparter</span>: Vi deler kun dine personopplysninger med tredjeparter når det er nødvendig for å oppfylle våre tjenester, for eksempel med myndigheter som gir støtte til Bil1.</span>

                <span className='text-xl font-bold p-10'>4. Personvernrettigheter</span>
                <span className='text-md font-normal p-2 gap-2'>4.1 <span className='font-bold'>Innsyn og Korrigering</span>: Du har rett til å be om innsyn i og korrigering av dine personopplysninger. <br /><br />4.2 <span className="font-bold">Sletting</span>: Du kan be om sletting av dine personopplysninger, i samsvar med gjeldende lover og regler.</span>

                <span className='text-xl font-bold p-10'>5. Informasjonssikkerhet</span>
                <span className='text-md font-normal p-2 gap-2'>5.1 <span className="font-bold">Sikkerhetstiltak</span>: Vi tar rimelige sikkerhetstiltak for å beskytte dine personopplysninger mot uautorisert tilgang eller utilsiktet tap.</span>

                <span className='text-xl font-bold p-10'>6. Endringer i Personvernerklæringen</span>
                <span className='text-md font-normal p-2 gap-2'>Bil1 forbeholder seg retten til å endre denne personvernerklæringen når som helst. Endringer vil bli effektive umiddelbart ved publisering på nettstedet.</span>

                <span className='text-xl font-bold p-10'>6. Kontakt Oss</span>
                <span className='text-md font-normal p-2 gap-2'>Har du spørsmål eller bekymringer angående personvernet ditt? Ta kontakt med oss <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" className='text-blue-600'>her</a>. <br /><br />Takk for at du stoler på Bil1 med dine personopplysninger!<br /> <br />Dato: 30. Mai - 2024</span>
            </div>
        </div>
    </main>
  )
}
