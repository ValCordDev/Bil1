''

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoterteBiler from "./components/PromoterteBiler";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Navbar />
      <Hero />
      <PromoterteBiler />
    </main>
  );
}
