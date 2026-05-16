import type { User } from "../types/user.type";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    const users: User[] = await response.json();
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
};
