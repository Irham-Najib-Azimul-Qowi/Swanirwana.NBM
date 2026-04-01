import { ShieldCheck, Zap, Globe } from "lucide-react";

export default function ValueProposition() {
  const benefits = [
    {
      id: 1,
      icon: <ShieldCheck size={64} className="text-black stroke-[3]" />,
      title: "NO SCAMS",
      description:
        "100% SECURE. ENCRYPTED PAYMENTS VIA XENDIT, E-WALLET, OR BANK TRANSFER.",
      bgColor: "bg-neon-pink"
    },
    {
      id: 2,
      icon: <Zap size={64} className="text-black stroke-[3]" />,
      title: "INSTANT QR",
      description:
        "NO PRINTING REQUIRED. SCAN & MOSH IMMEDIATELY.",
      bgColor: "bg-electric-blue"
    },
    {
      id: 3,
      icon: <Globe size={64} className="text-black stroke-[3]" />,
      title: "UNLIMITED HYPE",
      description:
        "ONLY THE BEST LINEUP. WE CURATE THE MOST BRUTAL EXPERIENCES.",
      bgColor: "bg-lime-green"
    },
  ];

  return (
    <section id="tentang-kami" className="py-24 md:py-32 bg-safety-orange border-b-8 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 text-center relative flex justify-center">
          <h2 className="text-6xl md:text-8xl font-syne font-extrabold text-black uppercase leading-tight z-10 w-fit relative">
            WHY <span className="text-lime-green brutal-shadow" style={{ WebkitTextStroke: '3px black' }}>SWANIRWANA?</span>
            <div className="sticker absolute -bottom-8 md:-right-16 md:left-auto left-0 -rotate-6 text-black font-syne font-bold uppercase bg-electric-blue px-6 py-2 text-2xl md:max-w-none max-w-fit">
              LITERALLY THE BEST
            </div>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`${benefit.bgColor} p-10 brutal-border brutal-shadow hover:-translate-y-4 hover:translate-x-2 brutal-shadow-hover transition-transform duration-200 flex flex-col items-center text-center`}
            >
              <div className="p-6 bg-white brutal-border mb-8 shadow-[6px_6px_0px_0px_black] rotate-3 hover:-rotate-3 snappy-transition">
                {benefit.icon}
              </div>
              <h3 className="text-4xl font-syne font-extrabold text-black mb-6 uppercase leading-none">
                {benefit.title}
              </h3>
              <p className="text-black font-space font-bold text-xl uppercase leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
