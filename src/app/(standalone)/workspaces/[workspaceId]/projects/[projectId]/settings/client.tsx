"use client";
import UpdateProjectForm from "../../../../../../../features/projects/components/UpdateProjectForm";
import { useGetSingleProject } from "../../../../../../../features/projects/api/use-get-single-project";
import { useProjectId } from "../../../../../../../features/projects/hooks/use-project-id";
import { PageLoader } from '../../../../../../../components/page-loader';
import { PageError } from '../../../../../../../components/page-error';

export const ProjectIdSettingsClient = () => {
  const projectId = useProjectId();
  const { data: initialValues , isLoading } = useGetSingleProject({ projectId });

  if(isLoading) {
    return <PageLoader />
  }

  if(!initialValues) {
    return <PageError message="Project not Found" />
  }

  return (
    <div className="w-full lg:max-w-xl">
      <UpdateProjectForm initialValues={initialValues} />
    </div>
  );
};
