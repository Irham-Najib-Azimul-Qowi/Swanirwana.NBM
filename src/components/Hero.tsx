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

      <div className="relative z-10 w-full flex-grow flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 mt-10 md:mt-0">
        {/* Sticker */}
        <div className="sticker absolute top-[10%] left-4 md:top-1/4 md:left-20 lg:left-32 rotate-12 text-neon-pink font-syne font-extrabold text-lg md:text-2xl uppercase brutal-border bg-lime-green px-3 md:px-4 py-1 md:py-2 hover:rotate-6 snappy-transition cursor-pointer z-20">
          Hype!
        </div>
        <div className="sticker absolute bottom-1/4 right-2 md:bottom-1/3 md:right-20 lg:right-32 -rotate-6 text-black font-syne font-extrabold text-sm md:text-xl uppercase brutal-border bg-electric-blue px-3 md:px-4 py-1 md:py-2 hover:-rotate-12 snappy-transition cursor-pointer shadow-none z-20">
          Sold Out Fast
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-syne font-extrabold uppercase text-lime-green brutal-shadow mb-4 md:mb-6 pt-10 break-words w-full" style={{ WebkitTextStroke: '3px black', paintOrder: 'stroke fill' }}>
          SWANIRWANA
        </h1>
        
        <p className="text-lg md:text-3xl lg:text-5xl text-black font-syne font-bold uppercase mb-10 md:mb-16 bg-lime-green px-4 md:px-6 py-2 md:py-3 brutal-border brutal-shadow inline-block max-w-[90vw]">
          The Ultimate Brutal Experience
        </p>

        <Link
          href="#events"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-neon-pink text-black font-syne font-extrabold text-xl sm:text-3xl lg:text-5xl uppercase px-8 sm:px-12 py-4 sm:py-6 brutal-border brutal-shadow brutal-shadow-hover transition-all snappy-transition text-center"
        >
          <Ticket size={40} className="stroke-[3] hidden sm:block" />
          GET TICKETS NOW
        </Link>
      </div>

      {/* Giant Marquee at the bottom of hero */}
      <div className="w-full bg-black text-lime-green font-syne font-extrabold uppercase py-4 md:py-6 border-t-8 border-black border-b-4 marquee-container text-2xl md:text-5xl mt-auto z-10">
        <div className="marquee-content">
          <span className="mx-4 md:mx-8">SWANIRWANA FESTIVAL 2026 - TICKET NOW AVAILABLE - SECURE YOUR SPOT</span>
          <span className="mx-4 md:mx-8">SWANIRWANA FESTIVAL 2026 - TICKET NOW AVAILABLE - SECURE YOUR SPOT</span>
        </div>
      </div>
    </section>
  );
}
