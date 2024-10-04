"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategorySection from "@/components/imported/category-section";
import ProjectModal from "@/components/imported/project-modal";
import ProjectViewModal from "@/components/imported/view-modal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

const initialProjects: Project[] = [
  {
    id: "1",
    name: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my projects and skills.",
    longDescription:
      "# Portfolio Website\n\nThis project is a responsive portfolio website built using React and Next.js. It showcases my projects, skills, and experiences in a modern and interactive way.\n\n## Features\n\n- Responsive design\n- Project showcase\n- Skills section\n- Contact form\n\n## Technologies Used\n\n- React\n- Next.js\n- Tailwind CSS\n- Framer Motion for animations",
    skills: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com/portfolio",
    category: "Web",
    image: "/placeholder.svg?height=400&width=400",
    additionalImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
    ],
  },
  {
    id: "2",
    name: "Task Manager App",
    description: "A mobile app for managing tasks and improving productivity.",
    longDescription:
      "# Task Manager App\n\nThis mobile application helps users manage their tasks and improve productivity. It provides an intuitive interface for creating, organizing, and tracking tasks.\n\n## Features\n\n- Task creation and management\n- Categories and tags\n- Reminders and notifications\n- Progress tracking\n\n## Technologies Used\n\n- React Native\n- Redux for state management\n- Firebase for backend services",
    skills: ["React Native", "Redux", "Firebase"],
    link: "https://example.com/task-manager",
    category: "Mobile",
    image: "/placeholder.svg?height=400&width=400",
    additionalImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
    ],
  },
  {
    id: "3",
    name: "Adventure Game",
    description: "An immersive 2D adventure game with puzzle-solving elements.",
    longDescription:
      "# Adventure Game\n\nThis 2D adventure game offers an immersive experience with beautiful graphics and challenging puzzles. Players explore a mysterious world while solving riddles and uncovering the story.\n\n## Features\n\n- Engaging storyline\n- Beautiful 2D graphics\n- Challenging puzzles\n- Multiple endings\n\n## Technologies Used\n\n- Unity Engine\n- C# for game logic\n- Aseprite for pixel art",
    skills: ["Unity", "C#", "Pixel Art"],
    link: "https://example.com/adventure-game",
    category: "Game",
    image: "/placeholder.svg?height=400&width=400",
    additionalImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
    ],
  },
];

export default function ProjectPortfolio() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [isPVModelOpen, setIsPVModelOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<Project["category"]>("Web");
  const [viewingProject, setViewingProject] = useState<Project | null>(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(
      projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsPModalOpen(true);
  };

  const handleViewProject = (project: Project) => {
    setViewingProject(project);
    setIsPVModelOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 font-sans">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Project Portfolio
        </h1>
        <Button
          onClick={() => setIsPModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Project
        </Button>
      </header>

      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) =>
          setSelectedCategory(value as Project["category"])
        }
        className="mb-8"
      >
        <ToggleGroupItem value="Web" aria-label="Web">
          Web
        </ToggleGroupItem>
        <ToggleGroupItem value="Software" aria-label="Software">
          Software
        </ToggleGroupItem>
        <ToggleGroupItem value="Game" aria-label="Game">
          Game
        </ToggleGroupItem>
        <ToggleGroupItem value="Mobile" aria-label="Mobile">
          Mobile
        </ToggleGroupItem>
      </ToggleGroup>

      <CategorySection
        projects={projects.filter((p) => p.category === selectedCategory)}
        onEditProject={handleEditProject}
        onDeleteProject={deleteProject}
        onViewProject={handleViewProject}
      />

      <ProjectModal
        isOpen={isPModalOpen}
        onClose={() => {
          setIsPModalOpen(false);
          setEditingProject(null);
        }}
        onSave={(project) => {
          if (editingProject) {
            updateProject(project);
          } else {
            addProject(project);
          }
          setIsPModalOpen(false);
          setEditingProject(null);
        }}
        project={editingProject}
      />

      <ProjectViewModal
        isOpen={isPVModelOpen}
        onSave={() => {
          alert("Saving");
          setIsPVModelOpen(false);
        }}
        project={viewingProject}
        onClose={() => {
          setViewingProject(null);
          setIsPVModelOpen(false);
        }}
      />
    </div>
  );
}
