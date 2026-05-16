import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return <div className="px-12 py-6 border-b border-neutral-200 col-[2/-1] row-[1/2] flex justify-between bg-bg-ui ">
    <h1 className="text-3xl">Inforamtic Json Placeholder</h1>
    <DarkModeToggle/>
    
  </div>;
}
