import { useQuery } from "@tanstack/react-query";
import { getList } from "../services";
import { TEndpointUserLists } from "../interfaces";

type TUseGetListQueryProps = {
  id?: string;
  onSuccess?: (data: TEndpointUserLists) => void;
  onError?: (error: any) => void;
};

export const useGetListQuery = ({
  id,
  onSuccess,
  onError,
}: TUseGetListQueryProps) => {
  // Queries

  return useQuery({
    queryKey: ["list", id],
    queryFn: () => getList(`${id}`),
    onSuccess,
    onError,
    enabled: !!id,
  });
};