"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategorySection from "@/components/imported/category-section";
import ProjectModal from "@/components/imported/project-modal";
import ProjectViewModal from "@/components/imported/view-modal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Project } from "@/lib/project.type";
import { profile } from "@/lib/profile.data";

export default function ProjectPortfolio() {
  const [projects, setProjects] = useState<Project[]>(
    profile.Projects.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    )
  );
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [isPVModelOpen, setIsPVModelOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    Project["category"] | "all"
  >("all");
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

  const deleteProject = (id: number) => {
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
        onValueChange={(value) => {
          if (!value) value = "all";
          setSelectedCategory(value as Project["category"] | "all");
        }}
        className="mb-8"
      >
        <ToggleGroupItem value="all" aria-label="All">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="web" aria-label="Web">
          Web
        </ToggleGroupItem>
        <ToggleGroupItem value="software" aria-label="Software">
          Software
        </ToggleGroupItem>
        <ToggleGroupItem value="videogame" aria-label="Game">
          Game
        </ToggleGroupItem>
        <ToggleGroupItem value="mobile" aria-label="Mobile">
          Mobile
        </ToggleGroupItem>
      </ToggleGroup>

      <CategorySection
        projects={projects.filter(
          (p) => selectedCategory == "all" || p.category === selectedCategory
        )}
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
        project={viewingProject}
        onClose={() => {
          setViewingProject(null);
          setIsPVModelOpen(false);
        }}
      />
    </div>
  );
}
