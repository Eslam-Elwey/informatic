import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {

  return (
    <div className="h-screen grid md:grid-cols-[26rem_1fr] grid-cols-[12rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-bg-main overflow-auto p-[4rem 4.8rem 6.4rem] row-[2/-1] col-[2/-1]  ">
        <div className="max-w-480 mt-2 m-auto flex flex-col gap-[3.2rem] justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
