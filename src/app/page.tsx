import BenefitsSection from "@/components/benefitsSection";
import CallToAction from "@/components/callToAction";
import CenterButton from "@/components/centerButton";
import ContactForm from "@/components/contactSection";
import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import ProcessSection from "@/components/porcessSection";
import ProjectCard from "@/components/projectCard";
import ProjectsSection from "@/components/projectsSection";
import TestimonialsSection from "@/components/section";
import SkillsComponent from "@/components/skillsSection";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <Topbar/>
        <HeroSection id="home"/>
        <ProjectsSection id="projects"/>
        <BenefitsSection id="benefits"/>
        <ProcessSection id="process"/>
        <SkillsComponent id="skills"/>
        <TestimonialsSection id="testimonials"/>
        <ContactForm id="contact"/>
        <CallToAction id="cta"/>
      </div>
    </main>
  );
}