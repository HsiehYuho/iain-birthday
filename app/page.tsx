import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import RSVPForm from "@/components/RSVPForm";
import BookRegistry from "@/components/BookRegistry";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatToExpect />
      <RSVPForm />
      <BookRegistry />
      <Footer />
    </main>
  );
}
