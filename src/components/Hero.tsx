import Link from "next/link";
import { ArrowRight, Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-50 pt-20 pb-32 overflow-hidden flex items-center justify-center">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      </div>
      <div className="absolute top-0 left-0 translate-y-24 -translate-x-1/3">
        <div className="w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
          <span className="text-sm font-medium text-blue-900">
            Platform Tiket Event Terpercaya
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 leading-tight mb-6">
          Beli Tiket Event <span className="text-amber-500">Lebih Mudah,</span>{" "}
          <br className="hidden md:block" />
          Lebih Cepat
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Temukan berbagai event menarik dari konser musik, workshop, pameran
          hingga festival kuliner di sekitar Anda. Pesan sekarang hanya dalam
          hitungan detik.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#events"
            className="flex items-center gap-2 bg-amber-500 text-white hover:bg-amber-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-lg"
          >
            <Ticket size={24} />
            Cari Event
          </Link>
          <Link
            href="#mitra"
            className="flex items-center gap-2 bg-white text-blue-900 border border-gray-200 hover:border-gray-300 font-semibold px-8 py-4 rounded-full shadow-sm transition-all w-full sm:w-auto text-lg"
          >
            Jadi Penyelenggara
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
