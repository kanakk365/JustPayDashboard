import Navbar from "./components/main/Navbar";
import Sidebar from "./components/main/Sidebar";
import { Dashboard } from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex max-h-screen h-screen bg-white text-[#1A1F36]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar sectionLabel="Dashboards" pageLabel="Default" />
        <div className="flex flex-1 overflow-hidden">
          <Dashboard />
         
        </div>
      </div>
    </div>
  );
}
