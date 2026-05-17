import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import toast from "react-hot-toast";
import type { User } from "../../types/user.type";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  
  
  const { mutate: deleteUser, isPending } = useMutation<
  void,
  Error,
  string
  >({
      mutationFn: (id: string) => deleteUserApi(id),
      
      onSuccess: (_,id) => {
        const users:User[] = queryClient.getQueryData<User[]>(['users'])! ;
      toast.success("User successfully deleted");

      const filteredUsers = users.filter((user)=>String(user.id) !==id)


      queryClient.setQueryData(['users'],filteredUsers) ;
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteUser, isPending };
}