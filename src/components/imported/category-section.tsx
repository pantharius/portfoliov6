"use client";

import ProjectCard from "@/components/imported/project-card";
import { Project } from "@/lib/project.type";

type CategorySectionProps = {
  projects: Project[];
  onEditProject: (project: Project) => void;
  onDeleteProject: (id: number) => void;
  onViewProject: (project: Project) => void;
};

export default function CategorySectionComponent({
  projects,
  onEditProject,
  onDeleteProject,
  onViewProject,
}: CategorySectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEditProject}
          onDelete={onDeleteProject}
          onView={onViewProject}
        />
      ))}
    </div>
  );
}
