import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import TestimonialsSection from "@/components/section";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <>
      <CursorGradient />
      <Topbar/>
      <HeroSection/>
      <TestimonialsSection/>
    </>
  );
}
