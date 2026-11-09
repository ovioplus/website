import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { StatStrip } from '@/components/sections/StatStrip';
import { Channels } from '@/components/sections/Channels';
import { PhoneShowcase } from '@/components/sections/PhoneShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Problem } from '@/components/sections/Problem';
import { Platform } from '@/components/sections/Platform';
import { Advantages } from '@/components/sections/Advantages';
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
        <Problem />
        {FEATURES.showClients && <Clients />}
        <Channels />
        <Platform />
        <PhoneShowcase />
        <HowItWorks />
        <Advantages />
        {FEATURES.showTestimonials && <Testimonials />}
        {FEATURES.showPricing && <Pricing />}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
