import { Gamepad2, Layout, Smartphone, AppWindow } from "lucide-react";
import { ProjectCategory } from "@/lib/projects.data";
import { cn } from "@/lib/utils";

export default function CategoryIcon({
  category,
  className,
}: {
  category: ProjectCategory;
  className?: string;
}) {
  switch (category) {
    case "web":
      return <Layout className={cn("w-6 h-6", className)} />;
    case "software":
      return <AppWindow className={cn("w-6 h-6", className)} />;
    case "videogame":
      return <Gamepad2 className={cn("w-6 h-6", className)} />;
    case "mobile":
      return <Smartphone className={cn("w-6 h-6", className)} />;
    default:
      return null;
  }
}
