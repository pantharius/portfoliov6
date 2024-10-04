"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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

type ProjectViewModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectViewModalComponent({
  project,
  onClose,
}: ProjectViewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = [project.image, ...project.additionalImages];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.name} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="prose prose-sm prose-invert max-h-96 overflow-y-auto">
              <ReactMarkdown>{project.longDescription}</ReactMarkdown>
            </div>
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}