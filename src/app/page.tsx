import BenefitsSection from "@/components/benefitsSection";
import CallToAction from "@/components/callToAction";
import CenterButton from "@/components/centerButton";
import ContactForm from "@/components/contactSection";
import CursorGradient from "@/components/cursorGradient";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import ProcessSection from "@/components/porcessSection";
import ProjectsSection from "@/components/projectsSection";
import TestimonialsSection from "@/components/testimonialSection";
import ServiceSection from "@/components/ServiceSection";
import SkillsComponent from "@/components/skillsSection";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <Topbar/>
        <HeroSection id="home"/>
        <ServiceSection id="services"/>
        <BenefitsSection id="benefits"/>
        <ProcessSection id="process"/>
        <SkillsComponent id="skills"/>
        <ProjectsSection id="projects"/>
        <TestimonialsSection id="testimonials"/>
        <ContactForm id="contact"/>
        <CallToAction id="cta"/>
        <Footer/>
      </div>
    </main>
  );
}