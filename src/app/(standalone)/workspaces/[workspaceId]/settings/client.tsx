"use client"

import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
import UpdateWorkspaceForm from '../../../../../features/workspaces/components/UpdateWorkspaceForm';
import { PageLoader } from '@/components/page-loader';
import { PageError } from '@/components/page-error';
import { useGetSingleWorkspace } from '@/features/workspaces/api/use-get-single-workspace';

export const WorkspaceIdSettingsClient = () => {
     const workspaceId = useWorkspaceId();
      const { data: initialValues , isLoading } = useGetSingleWorkspace({ workspaceId });
    
      if(isLoading) {
        return <PageLoader />
      }
    
      if(!initialValues) {
        return <PageError message="Workspace not Found" />
      }
    return (
         <div className="w-full lg:max-w-xl">
      <UpdateWorkspaceForm initialValues={initialValues} />
    </div>
    )
};
