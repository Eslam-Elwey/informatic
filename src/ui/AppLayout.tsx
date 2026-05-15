import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function AppLayout() {
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
