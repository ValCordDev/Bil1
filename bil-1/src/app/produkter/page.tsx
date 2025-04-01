''

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroProdukter from "./HeroProdukter";
import Produkter from "./Produkter";

export default function Home() {
  return (
    <main className="w-screen min-h-screen m-0 p-0 overflow-hidden bg-slate-50">
      <Navbar />
      <HeroProdukter />
      <Produkter />
    </main>
  );
}
