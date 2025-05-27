import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import JoinWorkspaceForm from "@/features/workspaces/components/JoinWorkspaceForm";

interface WorkspaceIdJoinPageProps {
  params: Promise<{
    workspaceId: string;
  }>;
}

const WorkspaceIdJoinPage = async ({
  params,
}: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  const { workspaceId } = await params;
  if (!user) redirect("/sign-in");

  console.log(workspaceId);

  const initialValue = await getWorkspaceInfo({
    workspaceId,
  });

  if (!initialValue) {
    redirect("/");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValue={initialValue} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
