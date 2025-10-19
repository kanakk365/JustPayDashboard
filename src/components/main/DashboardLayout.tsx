"use client";

import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidebar from "@/components/Sidebar";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";

type DashboardLayoutProps = {
  children: ReactNode;
  pageLabel: string;
  sectionLabel?: string;
};

export const DashboardLayout = ({
  children,
  pageLabel,
  sectionLabel = "Dashboards",
}: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen max-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar sectionLabel={sectionLabel} pageLabel={pageLabel} />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden">
            {children}
          </main>
          <NotificationPanel />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

