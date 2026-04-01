"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-lime-green text-black font-syne font-bold uppercase py-2 border-b-4 border-black marquee-container">
        <div className="marquee-content text-xs md:text-sm tracking-widest">
          <span className="mx-4">🔥 TICKET SALE LIVE NOW</span>
          <span className="mx-4">🔥 SWANIRWANA 2026</span>
          <span className="mx-4">🔥 GET YOUR TICKETS</span>
          <span className="mx-4">🔥 TICKET SALE LIVE NOW</span>
          <span className="mx-4">🔥 SWANIRWANA 2026</span>
          <span className="mx-4">🔥 GET YOUR TICKETS</span>
        </div>
      </div>
      
      <header className="sticky top-0 z-50 w-full bg-neon-pink border-b-4 border-black transition-all">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative z-20 bg-neon-pink">
          <Link href="/" className="text-3xl md:text-4xl font-syne font-extrabold uppercase tracking-tighter text-black brutal-shadow-hover snappy-transition inline-block">
            SWANIRWANA
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-syne font-bold uppercase text-lg md:text-xl">
            <Link href="#events" className="text-black hover:text-white transition-colors brutal-shadow-hover">
              Lineup
            </Link>
            <Link href="#mitra" className="text-black hover:text-white transition-colors brutal-shadow-hover">
              Info
            </Link>
            <Link href="#tentang-kami" className="text-black hover:text-white transition-colors brutal-shadow-hover">
              Merch
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden lg:flex items-center gap-2 text-lg md:text-xl font-syne font-extrabold uppercase text-black bg-electric-blue brutal-border brutal-shadow brutal-shadow-hover px-6 py-2 snappy-transition"
            >
              <User size={24} className="stroke-[3]" />
              SECURE
            </Link>

            <button 
              className="lg:hidden p-2 text-black brutal-border brutal-shadow bg-lime-green active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} className="stroke-[3]" /> : <Menu size={24} className="stroke-[3]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-safety-orange border-b-8 border-black z-10 flex flex-col items-center py-8 gap-6 font-syne font-extrabold text-2xl uppercase transition-all duration-300 ease-in-out origin-top border-t-4 ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
        >
          <Link href="#events" onClick={() => setIsOpen(false)} className="text-black hover:text-white hover:scale-110 transition-transform brutal-shadow-hover">
            Lineup
          </Link>
          <Link href="#mitra" onClick={() => setIsOpen(false)} className="text-black hover:text-white hover:scale-110 transition-transform brutal-shadow-hover">
            Info
          </Link>
          <Link href="#tentang-kami" onClick={() => setIsOpen(false)} className="text-black hover:text-white hover:scale-110 transition-transform brutal-shadow-hover">
            Merch
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="mt-4 flex items-center gap-3 text-xl text-black bg-electric-blue brutal-border brutal-shadow px-8 py-3 w-fit">
            <User size={24} className="stroke-[3]" />
            SECURE TICKETS
          </Link>
        </div>
      </header>
    </>
  );
}
