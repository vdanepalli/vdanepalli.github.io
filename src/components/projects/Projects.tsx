'use client';

import { projectsData } from './ProjectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
