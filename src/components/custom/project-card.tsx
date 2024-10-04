import { Edit, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Project = {
  id: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
  categories: ("Games" | "Software" | "Websites")[];
  image: string;
};

type ProjectCardProps = {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
};

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative aspect-square">
        <Image
          src={project.image || "/placeholder.svg?height=200&width=200"}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(project)}
            className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(project.id)}
            className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-1 truncate">{project.name}</h3>
        <p className="text-xs text-gray-400 mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.skills.slice(0, 3).map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-1 py-0"
            >
              {skill}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs px-1 py-0">
              +{project.skills.length - 3}
            </Badge>
          )}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300"
        >
          View Project <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
