import { ShieldCheck, Zap, Globe } from "lucide-react";

export default function ValueProposition() {
  const benefits = [
    {
      id: 1,
      icon: <ShieldCheck size={48} className="text-amber-500 mb-6" />,
      title: "Pembayaran Aman",
      description:
        "Transaksi didukung oleh teknologi enkripsi terkini dan terintegrasi dengan berbagai metode pembayaran seperti Xendit, e-Wallet, dan Virtual Account.",
    },
    {
      id: 2,
      icon: <Zap size={48} className="text-amber-500 mb-6" />,
      title: "E-Ticket Instan",
      description:
        "Dapatkan tiket Anda seketika setelah pembayaran berhasil via email. Check-in jadi lebih praktis, cukup scan QR code tanpa perlu cetak tiket.",
    },
    {
      id: 3,
      icon: <Globe size={48} className="text-amber-500 mb-6" />,
      title: "Pilihan Event Beragam",
      description:
        "Dari konser internasional hingga workshop lokal. Ribuan penyelenggara telah mempercayakan event mereka di Mastutik. Cari sesuai minatmu!",
    },
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Mengapa Pilih <span className="text-amber-500">mastutik?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Kami hadir untuk memberikan pengalaman pembelian tiket yang nyaman,
            aman, dan tanpa hambatan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4 bg-amber-50 rounded-2xl mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
