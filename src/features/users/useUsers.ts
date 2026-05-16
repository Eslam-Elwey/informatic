import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import type { User } from "../../types/user.type";

export function useUsers() {
  const { isPending, data : users =[] , error  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    retry : 1
  });

  return { isPending, users,error };
}
