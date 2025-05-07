import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import ProjectCard from "@/components/projectCard";
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
        <ProjectCard
          title="Example Project"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          image="/project exp.png"
        />
      </div>
    </main>
  );
}