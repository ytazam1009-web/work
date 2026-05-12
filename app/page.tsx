  import Header from '@/components/header';
  import Hero from '@/components/hero';
  import StatsBanner from '@/components/stats-banner';
  import Services from '@/components/services';
  import WhyChooseUs from '@/components/why-choose-us';
  import HowItWorks from '@/components/how-it-works';
  import Testimonials from '@/components/testimonials';
  import Areas from '@/components/areas';
  import Contact from '@/components/contact';
  import Footer from '@/components/footer';

  export default function Home() {
    return (
      <main className="pt-20 lg:pt-24">
        <Header />
        <Hero />
        <StatsBanner />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Areas />
        <Contact />
        <Footer />
      </main>
    );
  }
