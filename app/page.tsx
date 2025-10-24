import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import projectsData from "@/data/projects.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="projects">
        <ProjectsSection projects={projectsData.projects} />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <footer className="py-8 px-4 bg-muted/30 text-center">
        <p className="text-muted-foreground">
          © 2025 Nishant Sharma. Built with Next.js and deployed on Vercel.
        </p>
      </footer>
    </main>
  );
}
