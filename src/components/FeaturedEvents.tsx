import Link from "next/link";
import { Calendar, MapPin, Tag } from "lucide-react";

export default function FeaturedEvents() {
  const dummyEvents = [
    {
      id: 1,
      title: "DAY 1: THE AWAKENING",
      date: "14 Oct 2026",
      location: "Main Stage",
      price: "Rp 250.000",
      imageColor: "bg-neon-pink",
      category: "Lineup",
      rotation: "-rotate-2",
      hoverRotation: "hover:rotate-2"
    },
    {
      id: 2,
      title: "DAY 2: TROPICAL BASS",
      date: "15 Oct 2026",
      location: "Beach Stage",
      price: "Rp 350.000",
      imageColor: "bg-electric-blue",
      category: "Lineup",
      rotation: "rotate-2",
      hoverRotation: "hover:-rotate-1"
    },
    {
      id: 3,
      title: "DAY 3: THE CLIMAX",
      date: "16 Oct 2026",
      location: "Main Stage",
      price: "Rp 500.000",
      imageColor: "bg-lime-green",
      category: "Lineup",
      rotation: "-rotate-1",
      hoverRotation: "hover:rotate-3"
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 bg-electric-blue border-b-8 border-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20 relative px-2">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-syne font-extrabold text-lime-green brutal-shadow mb-4 uppercase inline-block w-fit" style={{ WebkitTextStroke: '2px black' }}>
            OFFICIAL LINEUP
          </h2>
          <div className="sticker relative mt-4 md:absolute md:top-0 md:-right-4 lg:right-10 md:mt-0 rotate-[-4deg] md:rotate-12 text-black font-syne font-bold uppercase bg-neon-pink px-4 py-2 text-xl md:text-2xl w-fit">
            Don't Miss Out!
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-8 max-w-lg sm:max-w-none mx-auto">
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className={`group flex flex-col bg-white brutal-border brutal-shadow brutal-shadow-hover snappy-transition ${event.rotation} ${event.hoverRotation} hover:bg-black w-full`}
            >
              {/* Image Placeholder */}
              <div
                className={`w-full h-56 sm:h-64 ${event.imageColor} relative border-b-4 border-black overflow-hidden group-hover:grayscale snappy-transition`}
              >
                <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-50">
                  <span className="text-4xl md:text-6xl font-syne font-extrabold text-black/50 uppercase">
                    Stage
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white brutal-border px-3 md:px-4 py-1 text-xs md:text-sm font-syne font-extrabold uppercase text-black shadow-[4px_4px_0px_0px_black] rotate-3 group-hover:-rotate-3 snappy-transition">
                  {event.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 group-hover:text-lime-green snappy-transition">
                <h3 className="text-3xl md:text-4xl font-syne font-extrabold text-black group-hover:text-lime-green mb-6 md:mb-8 uppercase leading-tight line-clamp-2">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 font-space font-bold uppercase text-sm md:text-base">
                  <div className="flex items-center gap-3 md:gap-4 text-black group-hover:text-neon-pink">
                    <Calendar size={20} className="stroke-[3] md:w-6 md:h-6" />
                    <span className="text-lg md:text-xl">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-black group-hover:text-electric-blue">
                    <MapPin size={20} className="stroke-[3] md:w-6 md:h-6" />
                    <span className="text-lg md:text-xl line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-black group-hover:text-safety-orange">
                    <Tag size={20} className="stroke-[3] md:w-6 md:h-6" />
                    <span className="text-lg md:text-xl">STARTS AT {event.price}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-auto pt-2 md:pt-4 relative">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex w-full items-center justify-center py-3 md:py-4 bg-safety-orange text-black font-syne font-extrabold text-xl md:text-2xl uppercase brutal-border group-hover:bg-neon-pink group-hover:text-black hover:translate-x-1 sm:hover:translate-x-2 transition-transform shadow-[4px_4px_0px_0px_black] group-hover:shadow-[2px_2px_0px_0px_black] sm:group-hover:shadow-none bg-safety-orange border-black"
                  >
                    SECURE TICKETS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
