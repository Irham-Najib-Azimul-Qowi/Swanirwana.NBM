import Link from "next/link";
import Image from "next/image";
import { Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-safety-orange flex flex-col justify-center overflow-hidden border-b-8 border-black">
      {/* Background Image with mix-blend-mode */}
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-multiply">
        <Image 
          src="/images/swanirwana_hero_bg.png" 
          alt="Swanirwana Festival" 
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        {/* Sticker */}
        <div className="sticker top-1/4 left-10 md:left-32 rotate-12 text-neon-pink font-syne font-extrabold text-2xl uppercase brutal-border bg-lime-green px-4 py-2 hover:rotate-6 snappy-transition cursor-pointer">
          Hype!
        </div>
        <div className="sticker bottom-1/3 right-10 md:right-32 -rotate-6 text-black font-syne font-extrabold text-xl uppercase brutal-border bg-electric-blue px-4 py-2 hover:-rotate-12 snappy-transition cursor-pointer shadow-none">
          Sold Out Fast
        </div>

        <h1 className="text-7xl md:text-[9rem] font-syne font-extrabold uppercase text-lime-green brutal-shadow mb-6 pt-10" style={{ WebkitTextStroke: '4px black', paintOrder: 'stroke fill' }}>
          SWANIRWANA
        </h1>
        
        <p className="text-2xl md:text-5xl text-black font-syne font-bold uppercase mb-16 bg-lime-green px-6 py-3 brutal-border brutal-shadow inline-block">
          The Ultimate Brutal Experience
        </p>

        <Link
          href="#events"
          className="flex items-center gap-4 bg-neon-pink text-black font-syne font-extrabold text-3xl md:text-5xl uppercase px-12 py-6 brutal-border brutal-shadow brutal-shadow-hover transition-all snappy-transition"
        >
          <Ticket size={48} className="stroke-[3]" />
          GET TICKETS NOW
        </Link>
      </div>

      {/* Giant Marquee at the bottom of hero */}
      <div className="w-full bg-black text-lime-green font-syne font-extrabold uppercase py-6 border-t-8 border-black border-b-4 marquee-container text-5xl mt-auto z-10">
        <div className="marquee-content">
          <span className="mx-8">SWANIRWANA FESTIVAL 2026 - TICKET NOW AVAILABLE - SECURE YOUR SPOT</span>
          <span className="mx-8">SWANIRWANA FESTIVAL 2026 - TICKET NOW AVAILABLE - SECURE YOUR SPOT</span>
        </div>
      </div>
    </section>
  );
}
