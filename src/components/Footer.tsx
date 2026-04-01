import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lime-green pt-20 md:pt-32 pb-12 md:pb-16 font-syne uppercase">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1400px]">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 md:gap-16 mb-20 md:mb-32">
          
          {/* Giant Logo */}
          <div className="flex-1 w-full text-center xl:text-left">
            <Link href="/" className="text-[2.5rem] min-[400px]:text-6xl sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem] font-extrabold tracking-tighter text-neon-pink leading-none brutal-shadow hover:-translate-y-2 md:hover:-translate-y-4 snappy-transition inline-block break-words w-full" style={{ WebkitTextStroke: '2px black', paintOrder: 'stroke fill' }}>
              SWANIRWANA
            </Link>
          </div>

          {/* Links Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 text-black mt-8 md:mt-10">
            <div>
              <h4 className="font-extrabold border-b-4 md:border-b-8 border-black pb-4 mb-6 md:mb-8 text-2xl sm:text-3xl md:text-5xl text-black">INFO</h4>
              <ul className="flex flex-col gap-4 md:gap-6 text-xl sm:text-2xl md:text-4xl font-bold">
                <li>
                  <Link href="#events" className="hover:text-neon-pink brutal-shadow-hover inline-block snappy-transition">LINEUP</Link>
                </li>
                <li>
                  <Link href="#mitra" className="hover:text-electric-blue brutal-shadow-hover inline-block snappy-transition">TICKETS</Link>
                </li>
                <li>
                  <Link href="#tentang-kami" className="hover:text-safety-orange brutal-shadow-hover inline-block snappy-transition">MERCH</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold border-b-4 md:border-b-8 border-black pb-4 mb-6 md:mb-8 text-2xl sm:text-3xl md:text-5xl text-black">CONNECT</h4>
              <ul className="flex flex-col gap-4 md:gap-6 text-xl sm:text-2xl md:text-4xl font-bold">
                <li>
                  <a href="#" className="hover:text-neon-pink brutal-shadow-hover inline-block snappy-transition">INSTAGRAM</a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue brutal-shadow-hover inline-block snappy-transition">TWITTER</a>
                </li>
                <li>
                  <a href="#" className="hover:text-safety-orange brutal-shadow-hover inline-block snappy-transition">TIKTOK</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 md:pt-12 border-t-4 md:border-t-8 border-black flex flex-col lg:flex-row items-center justify-between gap-6 text-black font-bold text-lg md:text-2xl text-center lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} SWANIRWANA. NO REFUNDS. NO MERCY.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="#" className="hover:text-neon-pink hover:underline">TERMS</Link>
            <Link href="#" className="hover:text-electric-blue hover:underline">PRIVACY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
