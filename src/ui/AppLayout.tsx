import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function AppLayout() {

  console.log(import.meta.env.VITE_BASE_URL);

  return (
    <div className="min-h-screen">
      <div className="flex h-full">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
