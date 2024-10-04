"use client";

import ProjectCard from "@/components/imported/project-card";

type Project = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  skills: string[];
  link: string;
  category: "Web" | "Software" | "Game" | "Mobile";
  image: string;
  additionalImages: string[];
};

type CategorySectionProps = {
  projects: Project[];
  onEditProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
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
