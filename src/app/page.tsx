import Image from "next/image";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import HighlightSection from "./components/HighlightSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen p-2 bg-gradient-to-r from-blue-900 to-indigo-900">
      <NavHeader />

      <div className="flex flex-col sm:flex-row p-2 mt-10">

        {/* Coluna 1 */}
        <div className="flex-1 sm:pl-40">
          <p className="text-5xl lg:text-6xl font-bold hover:text-sky-200 text-right pr-3">
            Escale seu negócio{" "}
            <span className="text-teal-400">
              atraindo clientes qualificados{" "}
            </span>
            todos os dias com tráfego pago
          </p>
          <p className="font-mono text-3xl pt-4 mt-5">
            Faça anúncios online com quem já gerenciou mais 50 milhões de reais
            em anúncios e aumente os clientes, faturamento e lucro da sua
            empresa.
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="flex-1 p-4">
          <h2 className="text-4xl text-center max-w-md text-amber-200">Quero entrar em contato com você</h2>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
