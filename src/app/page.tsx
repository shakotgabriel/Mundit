import Image from "next/image";
import Herosection from "@/components/herosection"
import CTASection from "@/components/cta-section";
import Testimonials from "@/components/testimonials";
import Service from "./services/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="relative">
        <Herosection />
        <Service />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}
