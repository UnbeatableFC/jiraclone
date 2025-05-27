import { getCurrent } from "@/features/auth/queries";
import UpdateProjectForm from "@/features/projects/components/UpdateProjectForm";
import { getSingleProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";
import React from "react";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getSingleProject({
    projectId: params.projectId,
  });

  return (
    <div className="w-full lg:max-w-xl">
      <UpdateProjectForm initialValues={initialValues} />
    </div>
  );
};

export default ProjectIdSettingsPage;
