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
        title="Little Diet E-commerce Website"
        description="Developed a fully responsive e-commerce website for Little Diet, a baby products brand, using TailwindCSS. Ensured smooth performance across all devices and maintained consistent communication with the client, integrating feedback promptly. The project was successfully delivered and resulted in a four-figure earning."
        image="/projectImage/littledietFull.png"
        projectUrl="https://www.littlediet.in/"
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
      <ProjectCard
        title="Beats Product Landing Page UI"
        description="Developed a visually stunning and fully responsive landing page for Beats 3 using HTML and CSS. The design features a sleek dark theme, modern typography, and an engaging layout with brand integrations like Apple, Spotify, Amazon, and YouTube. Included interactive CTAs and smooth UI elements to simulate a real-world product experience."
        image="/projectImage/beatsFull.png"
        projectUrl="https://ajeet72.github.io/beats/"
        scrollImage={true}
      />
      <ProjectCard
        title="PW Skills Website Clone"
        description="Recreated the PW Skills website using HTML, CSS, and JavaScript with pixel-perfect accuracy. The project includes responsive layouts, a multi-level navigation menu, search functionality, and clean UI components. This clone demonstrates my frontend skills in layout design, responsiveness, and attention to detail."
        image="/projectImage/pwskillsFull.png"
        projectUrl="https://ajeet72.github.io/pwskills/"
        scrollImage={true}
        reverse={true}
      />
    </section>
  );
}
