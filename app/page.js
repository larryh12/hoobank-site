import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Business from '@/components/Business';
import Billing from '@/components/Billing';
import CardDeal from '@/components/CardDeal';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex items-start justify-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>

      <div className="flex items-center justify-center bg-primary px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          Footer
        </div>
      </div>
    </div>
  );
}
