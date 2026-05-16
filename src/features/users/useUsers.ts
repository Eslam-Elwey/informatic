import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import type { User } from "../../types/user.type";

export function useUsers() {
  const { isPending, data : users =[]  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isPending, users };
}
