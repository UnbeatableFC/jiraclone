"use client"

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetSingleWorkspaceInfo } from "@/features/workspaces/api/use-get-single-workspace-info";
import JoinWorkspaceForm from "@/features/workspaces/components/JoinWorkspaceForm";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export const WorkspaceIdJoinClient = () => {
    const workspaceId = useWorkspaceId();
          const { data: initialValues , isLoading } = useGetSingleWorkspaceInfo({ workspaceId });
        
          if(isLoading) {
            return <PageLoader />
          }
        
          if(!initialValues) {
            return <PageError message="Workspace not Found" />
          }

     return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValue={initialValues} />
    </div>
  );
}