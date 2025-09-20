import CenterButton from "./centerButton";
import ProjectCard from "./projectCard";

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
      <ProjectCard
        title="Scalable Backend System with Queue Management"
        description="Built a robust backend using TypeScript, Express, Redis, and PostgreSQL to process user requests through an efficient queue system. Integrated Prometheus and Grafana for real-time monitoring and system visibility. Focused on performance, reliability, and secure data handling."
        image="/projectImage/queueDesign.png"
        projectUrl="https://paytm-iota.vercel.app/"
        scrollImage={false}
        reverse={true}
      />
    </section>
  );
}
