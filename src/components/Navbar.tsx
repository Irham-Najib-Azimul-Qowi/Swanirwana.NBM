import Link from "next/link";
import { User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-900">
          mastutik<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#events" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-colors">
            Event
          </Link>
          <Link href="#mitra" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-colors">
            Mitra
          </Link>
          <Link href="#tentang-kami" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-colors">
            Tentang Kami
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2.5 rounded-full shadow-sm transition-all"
          >
            <User size={18} />
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
