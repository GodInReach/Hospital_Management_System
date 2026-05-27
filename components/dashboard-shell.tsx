"use client";

import type React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header/header";
import { Backdrop } from "./backdrop";
import { useSidebar } from "./context/SidebarContext";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      <Sidebar />
      <Backdrop />
      <div
        className={`flex min-w-0 flex-1 flex-col transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        <Header />
        <main className="min-w-0 flex-1 bg-gray-50">
          <div className="mx-auto max-w-[1600px] p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
