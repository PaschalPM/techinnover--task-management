import Sidebar from "@/components/Sidebar";
import logo from "../assets/techinnover-logo.svg";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex w-full max-h-screen text-app-text-base">
      <Sidebar logo={logo} />
      <div className="container px-4 mx-auto min-w-[calc(100%-250px)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
