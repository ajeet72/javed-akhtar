import CenterButton from "./centerButton";
import ProjectCard from "./projectCard";

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <CenterButton name="Projects" />
      <ProjectCard
        title="Full-Stack Blog Platform"
        description="Built a responsive blog platform using React, TypeScript, and Cloudflare Workers. Implemented JWT-based authentication, Zod for validation, and Prisma with PostgreSQL for secure data handling. Optimized for performance and scalability with a modern serverless architecture."
        image="/projectImage/medium.png"
        projectUrl="https://medium-blog-six-gamma.vercel.app/"
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
