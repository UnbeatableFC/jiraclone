import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";


interface useGetSingleTaskProps {
  taskId: string;
}

export const useGetSingleTask = ({
  taskId,
}: useGetSingleTaskProps) => {
  const query = useQuery({
    queryKey: ["tasks", taskId],
    queryFn: async () => {
      const response = await client.api.tasks[":taskId"].$get({
        param: { taskId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch individual task");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
