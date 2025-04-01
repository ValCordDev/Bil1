''

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoterteBiler from "./components/PromoterteBiler";

export default function Home() {
  return (
    <main className="w-screen min-h-screen m-0 p-0 overflow-hidden">
      <Navbar />
      <Hero />
      <PromoterteBiler />
    </main>
  );
}
