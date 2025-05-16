import { getCurrent } from "@/features/auth/queries";
import { getSingleWorkspace } from "@/features/workspaces/queries";
import UpdateWorkspaceForm from "@/features/workspaces/components/UpdateWorkspaceForm";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getSingleWorkspace({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect(`/workspaces/${params.workspaceId}`);
  }
  return (
    <div className="w-full lg:max-w-xl">
      <UpdateWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
