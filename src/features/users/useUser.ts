import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../services/apiUsers";
import type { User } from "../../types/user.type";
import { useParams } from "react-router";
import type { UserInfoParam } from "./user.info.type";

export function useUser() {
  const { userId } = useParams<UserInfoParam>();
  const {
    isPending,
    data: user,
    error,
  } = useQuery<User>({
    queryKey: ["users", userId],
    queryFn : ()=>getUserDetails(userId as string),
    retry: 1,
  });

  return { isPending, user, error };
}
