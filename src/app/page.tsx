import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import TestimonialsSection from "@/components/section";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative"> {/* Added relative to establish stacking context */}
      <CursorGradient />
      <div className="relative z-10 "> {/* Wrapped content in a div with higher z-index */}
        <Topbar/>
        <HeroSection/>
        <TestimonialsSection/>
      </div>
    </main>
  );
}