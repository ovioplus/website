import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { StatStrip } from '@/components/sections/StatStrip';
import { Channels } from '@/components/sections/Channels';
import { PhoneShowcase } from '@/components/sections/PhoneShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Dashboard } from '@/components/sections/Dashboard';
import { Clients } from '@/components/sections/Clients';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FEATURES } from '@/lib/config';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        {FEATURES.showClients && <Clients />}
        <Channels />
        <PhoneShowcase />
        <HowItWorks />
        <Dashboard />
        {FEATURES.showTestimonials && <Testimonials />}
        {FEATURES.showPricing && <Pricing />}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
