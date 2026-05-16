import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import BusinessCards from "../components/BusinessCards";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <StatsBar />

      <BusinessCards />

      <WhyUs />

      <Testimonials />

      <CTASection />
    </>
  );
}