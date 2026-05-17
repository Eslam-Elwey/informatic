import type { User } from "../types/user.type";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    const users: User[] = await response.json();
    return users;
  } catch (err) {
    console.error(err);
    if (err instanceof Error){
        throw new Error(err.message, { cause: err });
    } 
    throw new Error('something went wrong in fetching users', { cause: err }) ;
  }
};


export const getUserDetails = async(id:string):Promise<User> =>{
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error("User Not Found");
    const user: User = await response.json();
    return user;
  } catch (err) {
    console.error(err);
    if (err instanceof Error){
        throw new Error(err.message, { cause: err });
    } 
    throw new Error('something went wrong in fetching users', { cause: err }) ;
  }
};

export const deleteUser = async(id:string) :Promise<void> =>{
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}` , {
      method : 'DELETE'
    });
    if (!response.ok) throw new Error("User Not Found to be deleted");
     await response.json();
  } catch (err) {
    console.error(err);
    if (err instanceof Error){
        throw new Error(err.message, { cause: err });
    } 
    throw new Error('something went wrong in fetching users', { cause: err }) ;
  }
};