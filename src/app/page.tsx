import Image from "next/image";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import HighlightSection from "./components/HighlightSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavHeader from "./components/NavHeader";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-gradient-to-b from-blue-900 to-slate-900">
      <NavHeader />

      <ContactForm />
    </main>
  );
}
