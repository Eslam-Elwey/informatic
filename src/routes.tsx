import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import UserInfo from "./features/users/UserInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/users" replace /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:userId", element: <UserInfo /> },
      { path: "/users/:userId/todos", element: <Todos /> },
      { path: "/todos", element: <Todos /> },
      { path: "/posts", element: <Posts /> },
      { path: "/comments", element: <Comments /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
