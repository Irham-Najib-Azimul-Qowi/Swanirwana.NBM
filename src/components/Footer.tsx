import Link from "next/link";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-900 mb-6 inline-block">
              mastutik<span className="text-amber-500">.</span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Memudahkan Anda menemukan dan mengelola berbagai event dengan sistem
              e-ticketing terpercaya.
            </p>
            {/* <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-amber-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-amber-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-amber-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-amber-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div> */}
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-blue-900 mb-6 text-lg">Perusahaan</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#tentang-kami" className="text-gray-600 hover:text-amber-500 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Karir</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-blue-900 mb-6 text-lg">Layanan</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#events" className="text-gray-600 hover:text-amber-500 transition-colors">Jelajahi Event</Link>
              </li>
              <li>
                <Link href="#mitra" className="text-gray-600 hover:text-amber-500 transition-colors">Buat Event (Mitra)</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Pusat Bantuan</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Metode Pembayaran</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-blue-900 mb-6 text-lg">Hubungi Kami</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-600">
                Jl. Sudirman No 45, Jakarta Selatan 12190
              </li>
              <li>
                <a href="mailto:hello@mastutik.com" className="text-gray-600 hover:text-amber-500 transition-colors">hello@mastutik.com</a>
              </li>
              <li>
                <a href="tel:+6281122334455" className="text-gray-600 hover:text-amber-500 transition-colors">+62 811 2233 4455</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} mastutik. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
