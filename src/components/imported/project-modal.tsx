"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

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

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  project?: Project | null;
};

export default function ProjectModalComponent({
  isOpen,
  onClose,
  onSave,
  project,
}: ProjectModalProps) {
  const [formData, setFormData] = useState<Project>({
    id: "",
    name: "",
    description: "",
    longDescription: "",
    skills: [],
    link: "",
    category: "Web",
    image: "",
    additionalImages: [],
  });

  const [crop, setCrop] = useState<Crop>();
  const [imageSource, setImageSource] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setFormData(project);
      setImageSource(project.image);
    } else {
      setFormData({
        id: Date.now().toString(),
        name: "",
        description: "",
        longDescription: "",
        skills: [],
        link: "",
        category: "Web",
        image: "",
        additionalImages: [],
      });
      setImageSource(null);
    }
  }, [project]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setFormData((prev) => ({ ...prev, skills }));
  };

  const handleCategoryChange = (category: Project["category"]) => {
    setFormData((prev) => ({ ...prev, category }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSource(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (crop: Crop) => {
    setCrop(crop);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the cropped image and update formData.image
    // For this example, we'll just use the original image
    onSave({ ...formData, image: imageSource || "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Project Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Short description"
                  required
                />
              </div>
              <div>
                <Label htmlFor="longDescription">
                  Long Description (Markdown)
                </Label>
                <Textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  placeholder="Long description in Markdown"
                  required
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills.join(", ")}
                  onChange={handleSkillsChange}
                  placeholder="Skills (comma-separated)"
                  required
                />
              </div>
              <div>
                <Label htmlFor="link">Project Link</Label>
                <Input
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Project Link"
                  required
                />
              </div>
              <div>
                <Label>Category</Label>
                <ToggleGroup
                  type="single"
                  value={formData.category}
                  onValueChange={handleCategoryChange}
                  className="justify-start"
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
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="image">Project Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </div>
              {imageSource && (
                <ReactCrop
                  crop={crop}
                  onChange={setCrop}
                  onComplete={handleCropComplete}
                >
                  <img src={imageSource} alt="Project" />
                </ReactCrop>
              )}
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
