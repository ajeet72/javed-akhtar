import CenterButton from "./centerButton";
import ProjectCard from "./projectCard";

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <CenterButton name="Projects" />
      <ProjectCard
        title="Example Project"
        description="A web app for visualizing personalized Spotify data. View your top artists,visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        image="/project image.png"
      />
      <ProjectCard
        title="Example Project"
        description="A web app for visualizing personalized Spotify data. View your top artists,visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        image="/project image.png"
        reverse={true}
      />
    </section>
  );
}
