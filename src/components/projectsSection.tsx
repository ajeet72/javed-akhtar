import { Clapperboard, Cpu } from "lucide-react";
import CenterButton from "./centerButton";
import ProjectCard, { ProjectCardWithSlider } from "./projectCard";

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <CenterButton name="Projects" />
      <ProjectCard
        title="Map Animation Workflow"
        description="Created dynamic map animation videos using After Effects, Geo-Layers 3, and Premiere Pro, leveraging OpenStreetMap data for accuracy. Designed engaging, data-driven visuals optimized for storytelling, audience retention, and professional broadcast quality."
        projectUrl="https://youtu.be/_89YYh8vEWQ?si=_8kM1HSf_B7tSuxG"
        scrollImage={false}
        video="/videoEditingService/project1.mp4"
      />
      <ProjectCard
        title="Cinematic Documentary Animation"
        description="Edited a documentary-style animation using Adobe After Effects and Premiere Pro, leveraging advanced 3D camera techniques to create dynamic motion and immersive storytelling. Designed smooth scene transitions, layered visual effects, and cinematic pacing to enhance narrative impact. Focused on delivering a professional, high-quality final render optimized for both online platforms and large-screen presentations."
        projectUrl="https://youtu.be/zZdhnt3rEK0?si=S6s8QYMxPYP2sNnN"
        scrollImage={false}
        reverse={true}
        video="/videoEditingService/project2.mp4"
      />
      <ProjectCard
        title="Thumbnail design project"
        description="Created high-impact YouTube thumbnails using Photoshop and After Effects for advanced compositing. Focused on bold typography, balanced composition, and strong visual contrast to maximize click-through rate and audience engagement."
        image="/projectImage/all thumbnail photo.jpg"
        scrollImage={true}
      />
      <ProjectCardWithSlider
        title="Custom Map Style"
        description="Created engaging, data-driven maps using Mapbox and MapTiler. Inspired by leading creators like CaspianReport, Johnny Harris, and Knowledgeia. Designed cinematic visuals optimized for storytelling, documentaries, and professional presentations."
        images={["/mapImages/1.jpg", "/mapImages/2.jpg", "/mapImages/13.jpg", "/mapImages/4.jpg", "/mapImages/5.jpg", "/mapImages/6.jpg", "/mapImages/7.jpg", "/mapImages/8.jpg", "/mapImages/9.jpg", "/mapImages/10.jpg", "/mapImages/11.jpg", "/mapImages/12.jpg", "/mapImages/13.jpg", "/mapImages/14.jpg", "/mapImages/15.jpg", "/mapImages/16.jpg", "/mapImages/17.jpg", "/mapImages/18.jpg"]}
        reverse={true}
      />
    </section>
  );
}
