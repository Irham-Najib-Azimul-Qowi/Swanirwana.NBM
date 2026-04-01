import Link from "next/link";
import { User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="bg-lime-green text-black font-syne font-bold uppercase py-2 border-b-4 border-black marquee-container">
        <div className="marquee-content text-sm tracking-widest">
          <span className="mx-4">🔥 TICKET SALE LIVE NOW</span>
          <span className="mx-4">🔥 SWANIRWANA 2026</span>
          <span className="mx-4">🔥 GET YOUR TICKETS</span>
          <span className="mx-4">🔥 TICKET SALE LIVE NOW</span>
          <span className="mx-4">🔥 SWANIRWANA 2026</span>
          <span className="mx-4">🔥 GET YOUR TICKETS</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full bg-neon-pink border-b-4 border-black">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-4xl font-syne font-extrabold uppercase tracking-tighter text-black brutal-shadow-hover snappy-transition inline-block">
            SWANIRWANA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-syne font-bold uppercase text-xl">
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

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 text-xl font-syne font-extrabold uppercase text-black bg-electric-blue brutal-border brutal-shadow brutal-shadow-hover px-6 py-2 snappy-transition"
            >
              <User size={24} className="stroke-[3]" />
              SECURE
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-black brutal-border brutal-shadow bg-lime-green">
              <Menu size={24} className="stroke-[3]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
