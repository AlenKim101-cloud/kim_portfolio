import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./Icons";

export default function SelectedWork() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          index="01"
          title="Selected Work"
          right="Featured systems — 2025 / 2026"
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Link to="/projects" className="btn-ghost">
          All Projects <ArrowRight />
        </Link>
      </Reveal>
    </section>
  );
}
