import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import ValueProposition from "@/components/ValueProposition";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedEvents />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
}
