import ProjectCard from "./project-card";

type Project = {
  id: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
  categories: ("Games" | "Software" | "Websites")[];
  image: string;
};

type CategorySectionProps = {
  title: string;
  projects: Project[];
  onEditProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
};

export default function CategorySection({
  title,
  projects,
  onEditProject,
  onDeleteProject,
}: CategorySectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={onEditProject}
            onDelete={onDeleteProject}
          />
        ))}
      </div>
    </section>
  );
}
