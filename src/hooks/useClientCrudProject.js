import { useQuery, useMutation } from "@tanstack/react-query";
import fetchData from "@/helpers/fetchData";
/**
 *
 * @param {boolean} skipFetch
 * @returns
 */
export const useClientCrudProject = (skipFetch) => {
  const url = "/api/project";

  const { isLoading, error, data, refetch } = useQuery({
    enabled: skipFetch || true,
    queryKey: ["project"],
    queryFn: () => fetchData(url),
  });

  return { isLoading, error, data, refetch };
};
