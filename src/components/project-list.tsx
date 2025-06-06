import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { DottedSeparator } from "./dotted-separator";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Project } from "@/features/projects/types";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import ProjectAvatar from "@/features/projects/components/ProjectAvatar";

interface ProjectListProps {
  data: Project[];
  total: number;
}

export const ProjectList = ({ data, total }: ProjectListProps) => {
  const { open: createProject } = useCreateProjectModal();
  const workspaceId = useWorkspaceId();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Project ({total})</p>
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={createProject}
          >
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <div>
          <DottedSeparator classname="my-4" />
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((project) => (
            <li key={project.$id}>
              <Link
                href={`/workspaces/${workspaceId}/projects/${project.$id}`}
              >
                <Card className="shadow-none rounded-lg hover:opacity-75 transition">
                  <CardContent className="p-4 flex items-center gap-x-2.5">
                    <ProjectAvatar
                      name={project.name}
                      image={project.imageUrl}
                      className="size-12"
                      fallbackClassname="text-lg"
                    />
                    <p className="text-lg font-medium truncate">
                      {project.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No projects found
          </li>
        </ul>
      </div>
    </div>
  );
};
