"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/lib/projects.data";
import CategoryIcon from "@/components/custom/category-icon";
import { profile } from "@/lib/profile.data";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="h-[350px] w-[225px]"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-full aspect-square overflow-hidden cursor-pointer h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="relative flex-grow">
                <img
                  src={`/images/projects/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 rounded-full p-2">
                  <CategoryIcon
                    className="text-white"
                    category={project.category}
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1 text-white text-xs">
                  {new Date(project.time).getFullYear()}
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-sm truncate">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {project.description.fr}
                </p>
                <div className="flex flex-nowrap gap-1 my-1">
                  {project.skillsid
                    .slice(0, 7)
                    .map((skillid) =>
                      profile.Skills.find((sk) => sk.id == skillid)
                    )
                    .filter((sk) => !!sk)
                    .map((skill, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger>
                          <div className="bg-neutral-100 border border-neutral-300 rounded-full w-6 h-6 p-1">
                            <img
                              src={`/images/skills/${skill.icon}`}
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{skill.name}</TooltipContent>
                      </Tooltip>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
          </DialogHeader>
          {project.images ? (
            <div className="grid grid-cols-2 gap-4 my-4">
              {project.images.map((screenshot, index) => (
                <img
                  key={index}
                  src={`/images/projects/details/${screenshot}`}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center">
              <img
                src={`/images/projects/${project.image}`}
                alt={`${project.name}`}
                className="w-1/2 h-auto rounded-lg"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skillsid.map((skillid, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800"
              >
                {profile.Skills.find((sk) => sk.id == skillid)?.name}
              </Badge>
            ))}
          </div>
          <Button asChild>
            <a
              href={project.live || undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </a>
          </Button>
          <DialogDescription>
            <ScrollArea>
              <ReactMarkdown
                className={cn(
                  "[&_h1]:text-2xl [&_h1]:uppercase [&_h1]:mt-4 [&_h1]:mb-2 [&_h1]:font-bold"
                )}
              >
                {project.content.fr}
              </ReactMarkdown>
            </ScrollArea>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
