import { useState, useEffect } from "react";
import {} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

type Project = {
  id: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
  categories: ("Games" | "Software" | "Websites")[];
  image: string;
};

type AddProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  project?: Project | null;
};

export default function AddProjectModal({
  isOpen,
  onClose,
  onSave,
  project,
}: AddProjectModalProps) {
  const [formData, setFormData] = useState<Project>({
    id: "",
    name: "",
    description: "",
    skills: [],
    link: "",
    categories: [],
    image: "",
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData({
        id: Date.now().toString(),
        name: "",
        description: "",
        skills: [],
        link: "",
        categories: [],
        image: "",
      });
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

  const handleCategoryChange = (
    category: "Games" | "Software" | "Websites"
  ) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project Name"
            required
          />
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            required
          />
          <Input
            name="skills"
            value={formData.skills.join(", ")}
            onChange={handleSkillsChange}
            placeholder="Skills (comma-separated)"
            required
          />
          <Input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Project Link"
            required
          />
          <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Categories:</label>
            {(["Games", "Software", "Websites"] as const).map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={formData.categories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
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
