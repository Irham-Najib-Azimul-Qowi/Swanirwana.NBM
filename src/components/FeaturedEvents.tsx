import Link from "next/link";
import { Calendar, MapPin, Tag } from "lucide-react";

export default function FeaturedEvents() {
  const dummyEvents = [
    {
      id: 1,
      title: "Konser Pesta Rakyat Sejahtera",
      date: "14 Oct 2026",
      location: "Stadion Utama, Jakarta",
      price: "Rp 250.000",
      imageColor: "bg-blue-100",
      category: "Musik",
    },
    {
      id: 2,
      title: "Tech Summit Asia 2026",
      date: "20 Nov 2026",
      location: "JCC Senayan, Jakarta",
      price: "Rp 500.000",
      imageColor: "bg-amber-100",
      category: "Konferensi",
    },
    {
      id: 3,
      title: "Pameran Seni Kontemporer",
      date: "05 Dec 2026",
      location: "Galeri Nasional, Bali",
      price: "Rp 150.000",
      imageColor: "bg-gray-200",
      category: "Seni",
    },
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Event Populer
            </h2>
            <p className="text-gray-600 text-lg">
              Jangan lewatkan event-event terbaik yang sedang hangat
              diperbincangkan saat ini.
            </p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center text-amber-500 font-semibold hover:text-amber-600 transition-colors"
          >
            Lihat Semua Event &rarr;
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Image Placeholder */}
              <div
                className={`w-full h-56 ${event.imageColor} relative overflow-hidden`}
              >
                {/* Fallback absolute content if no real image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-4xl font-bold text-blue-900/50">
                    Image
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 shadow-sm">
                  {event.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-4 line-clamp-2">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-amber-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-amber-500" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                    <Tag size={16} className="text-amber-500" />
                    <span>Mulai dari {event.price}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex w-full items-center justify-center py-3 bg-blue-50 text-blue-900 font-bold rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors"
                  >
                    Beli Tiket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden">
          <Link
            href="/events"
            className="flex items-center justify-center w-full py-4 border-2 border-gray-100 text-blue-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Lihat Semua Event
          </Link>
        </div>
      </div>
    </section>
  );
}
