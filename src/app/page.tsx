import Image from "next/image";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import HighlightSection from "./components/HighlightSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HighlightSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
