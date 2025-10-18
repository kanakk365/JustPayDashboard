"use client";

import {
  IconBell,
  IconClock,
  IconMenu,
  IconSearch,
  IconStar,
  IconSun,
} from "@/app/components/icons";
import { useSidebarStore } from "@/store/sidebarStore";
import { useNotificationPanelStore } from "@/store/notificationPanelStore";

type NavbarProps = {
  sectionLabel: string;
  pageLabel: string;
};

const Navbar = ({ sectionLabel, pageLabel }: NavbarProps) => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const toggleNotifications = useNotificationPanelStore((state) => state.toggle);

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#E5EAF3] bg-white px-8 pl-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSidebar}
          className="grid h-11 w-11 cursor-pointer place-items-center text-[#1C1F2E] transition"
        >
          <span className="sr-only">Toggle sidebar</span>
          <IconMenu />
        </button>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <IconStar />
          <span className="text-neutral-400">{sectionLabel}</span>
          <span className="text-[#C7CEDB]">/</span>
          <span className="text-[#1C1F2E]">{pageLabel}</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <IconSearch />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="h-10 w-60 rounded-lg bg-[#f3f3f3] pl-10 pr-20 text-sm text-[#1C1F2E] outline-none transition focus:border-[#1C1F2E]"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-slate-500">
            <span className="text-neutral-400">⌘/</span>
          </span>
        </div>
        <button className="grid place-items-center text-[#1C1F2E] transition">
          <IconClock />
        </button>
        <button className="grid place-items-center text-[#1C1F2E] transition">
          <IconSun />
        </button>
        <button
          type="button"
          onClick={toggleNotifications}
          className="grid place-items-center text-[#1C1F2E] transition"
        >
          <span className="sr-only">Toggle notifications panel</span>
          <IconBell />
        </button>
        <button
          type="button"
          onClick={toggleSidebar}
          className="grid place-items-center text-[#1C1F2E] transition"
        >
          <span className="sr-only">Toggle sidebar</span>
          <IconMenu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
