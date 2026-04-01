import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lime-green pt-32 pb-16 font-syne uppercase">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-16 mb-32">
          
          {/* Giant Logo */}
          <div className="flex-1 w-full text-center xl:text-left">
            <Link href="/" className="text-7xl md:text-[10rem] lg:text-[11rem] font-extrabold tracking-tighter text-neon-pink leading-none brutal-shadow hover:-translate-y-4 snappy-transition inline-block" style={{ WebkitTextStroke: '4px black' }}>
              SWANIRWANA
            </Link>
          </div>

          {/* Links Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-16 text-black mt-10">
            <div>
              <h4 className="font-extrabold border-b-8 border-black pb-4 mb-8 text-3xl md:text-5xl text-black">INFO</h4>
              <ul className="flex flex-col gap-6 text-2xl md:text-4xl font-bold">
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
              <h4 className="font-extrabold border-b-8 border-black pb-4 mb-8 text-3xl md:text-5xl text-black">CONNECT</h4>
              <ul className="flex flex-col gap-6 text-2xl md:text-4xl font-bold">
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
        <div className="pt-12 border-t-8 border-black flex flex-col lg:flex-row items-center justify-between gap-8 text-black font-bold text-2xl text-center lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} SWANIRWANA. NO REFUNDS. NO MERCY.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="hover:text-neon-pink hover:underline">TERMS</Link>
            <Link href="#" className="hover:text-electric-blue hover:underline">PRIVACY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
