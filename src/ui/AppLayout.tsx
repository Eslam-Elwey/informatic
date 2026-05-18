import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="h-screen grid md:grid-cols-[26rem_1fr] grid-cols-1 grid-rows-[auto_1fr] overflow-hidden">
      <Header onMenuClick={toggleSidebar} />

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <main className="bg-bg-main overflow-auto p-[4rem_4.8rem_6.4rem] row-[2/-1] col-span-full md:col-[2/-1]">
        <div className="max-w-480 mt-2 m-auto flex flex-col gap-[3.2rem] justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
