import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricings from "@/components/Pricings";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Steps />
      <Differentials />
      <Pricings />
      <Testimonials />
      <Footer />
    </main>
  );
}
