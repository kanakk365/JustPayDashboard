"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import type { SetStateAction } from "react";
import {
  IconBag,
  IconBriefcase,
  IconChat,
  IconChevronDown,
  IconDot,
  IconDocument,
  IconGrid,
  IconLayers,
  IconPlay,
  IconSettings,
  IconUser,
} from "@/components/icons";
import { Sidebar as SidebarRoot, SidebarBody } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebarStore } from "@/store/sidebarStore";
import { usePathname, useRouter } from "next/navigation";

type NavItem = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  active?: boolean;
  href?: string;
  children?: NavItem[];
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Favorites",
    items: [
      { label: "Overview", icon: IconDot },
      { label: "Projects", icon: IconDot },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { label: "Default", icon: IconGrid, active: true, href: "/" },
      { label: "Orders", icon: IconBag, href: "/orders" },
      {
        label: "eCommerce",
        icon: IconBag,
        children: [
          { label: "Products" },
          { label: "Orders" },
          { label: "Customers" },
          { label: "Inventory" },
        ],
      },
      {
        label: "Projects",
        icon: IconLayers,
        children: [
          { label: "Active Projects" },
          { label: "Completed" },
          { label: "Archived" },
          { label: "Templates" },
        ],
      },
      {
        label: "Online Courses",
        icon: IconPlay,
        children: [
          { label: "My Courses" },
          { label: "In Progress" },
          { label: "Completed" },
          { label: "Browse Courses" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: IconUser,
        children: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Account",
        icon: IconSettings,
        children: [
          { label: "Profile Settings" },
          { label: "Security" },
          { label: "Notifications" },
          { label: "Billing" },
        ],
      },
      {
        label: "Corporate",
        icon: IconBriefcase,
        children: [
          { label: "Company Info" },
          { label: "Team Members" },
          { label: "Departments" },
          { label: "Policies" },
        ],
      },
      {
        label: "Blog",
        icon: IconDocument,
        children: [
          { label: "All Posts" },
          { label: "Categories" },
          { label: "Tags" },
          { label: "Comments" },
        ],
      },
      {
        label: "Social",
        icon: IconChat,
        children: [
          { label: "Messages" },
          { label: "Connections" },
          { label: "Groups" },
          { label: "Activity Feed" },
        ],
      },
    ],
  },
];

const getInitialActiveItemKey = (pathname: string) => {
  for (const section of navSections) {
    for (const item of section.items) {
      const itemKey = `${section.title}-${item.label}`;
      if (item.href && item.href === pathname) {
        return itemKey;
      }
      if (item.active) {
        return itemKey;
      }
    }
  }
  const firstSection = navSections[0];
  const firstItem = firstSection?.items[0];
  return firstItem ? `${firstSection.title}-${firstItem.label}` : "";
};

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);
  const setSidebarOpen = useSidebarStore((state) => state.setOpen);
  const pathname = usePathname();
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      navSections.forEach((section) => {
        section.items.forEach((item) => {
          if (item.children) {
            initial[item.label] = Boolean(item.active);
          }
        });
      });
      return initial;
    }
  );
  const [activeItemKey, setActiveItemKey] = useState<string>(() =>
    getInitialActiveItemKey(pathname)
  );

  useEffect(() => {
    setActiveItemKey(getInitialActiveItemKey(pathname));
  }, [pathname]);

  const handleSetOpen = (value: SetStateAction<boolean>) => {
    setSidebarOpen(
      typeof value === "function"
        ? value(useSidebarStore.getState().isOpen)
        : value
    );
  };

  const toggleItem = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderNavItem = (item: NavItem, sectionTitle: string) => {
    const isDotNav = item.icon === IconDot && !item.children;
    const isFavoritesSection = sectionTitle === "Favorites";
    const isDefaultItem = item.label === "Default";
    const itemKey = `${sectionTitle}-${item.label}`;
    const isRouteItem = Boolean(item.href);
    const isActive = isRouteItem
      ? item.href === pathname
      : activeItemKey === itemKey;

    if (isDotNav) {
      return (
        <motion.button
          key={item.label}
          type="button"
          className={`relative flex items-center gap-3 rounded-full py-1 text-sm transition-colors ${
            isActive
              ? "text-sidebar-foreground"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
          } ${
            isSidebarOpen ? "pl-1 pr-2 justify-start" : "justify-center px-0"
          }`}
          onClick={() => setActiveItemKey(itemKey)}
        >
          {isActive ? (
            <span className="pointer-events-none absolute inset-0 rounded-full bg-sidebar-accent" />
          ) : null}
          {item.icon ? (
            <item.icon className="relative z-10 text-muted-foreground" />
          ) : null}
          {isSidebarOpen ? (
            <span className="relative z-10 whitespace-nowrap ">{item.label}</span>
          ) : null}
        </motion.button>
      );
    }

    const isExpandable = Boolean(item.children?.length);
    const isExpanded = isExpandable
      ? Boolean(expandedItems[item.label])
      : false;
    const isHighlighted = isActive || isExpanded;
    const containerBase = `relative flex items-center rounded-md py-2 text-sm font-medium transition-all ${
      isSidebarOpen ? "gap-3 px-3" : "justify-center px-0"
    }`;

    const stateClasses = isHighlighted
      ? "text-sidebar-foreground"
      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground";
    const iconClasses = isHighlighted
      ? "bg-sidebar-accent text-sidebar-foreground"
      : "bg-muted text-muted-foreground";
    const shouldShowChevron =
      isSidebarOpen && !isDotNav && !isFavoritesSection && !isDefaultItem;
    const shouldReserveChevronSpace =
      isSidebarOpen && !isDotNav && !isFavoritesSection && isDefaultItem;
    const iconOffsetClass =
      shouldShowChevron || shouldReserveChevronSpace ? "-ml-1" : "";

    const handleClick = () => {
      setActiveItemKey(itemKey);
      if (isExpandable) {
        toggleItem(item.label);
      }
      if (item.href) {
        router.push(item.href);
      }
    };

    const chevronMarkup =
      isSidebarOpen && !isDotNav && !isFavoritesSection ? (
        shouldShowChevron ? (
          <span className="relative z-10 flex h-4 w-4 items-center justify-center text-muted-foreground">
            <IconChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpandable && isExpanded ? "rotate-0" : "-rotate-90"
              }`}
            />
          </span>
        ) : shouldReserveChevronSpace ? (
          <span className="relative z-10 flex h-4 w-4" aria-hidden="true" />
        ) : null
      ) : null;

    return (
      <div key={item.label} className="flex flex-col">
        <motion.button
          type="button"
          className={`${containerBase} ${stateClasses}`}
          onClick={handleClick}
          aria-expanded={isExpandable ? isExpanded : undefined}
        >
          {isActive ? (
            <span className="pointer-events-none absolute inset-0 rounded-md bg-sidebar-accent" />
          ) : null}
          {isActive ? (
            <motion.span
              className="pointer-events-none absolute left-1 top-1/2 h-4 w-1 -translate-y-1/2 rounded-md bg-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            />
          ) : null}
          {chevronMarkup}
          <span
            className={`relative z-10 flex items-center justify-center rounded-md ${iconClasses} ${iconOffsetClass}`}
          >
            {item.icon ? <item.icon /> : null}
          </span>
          {isSidebarOpen ? (
            <span className="relative text-sm font-normal z-10 whitespace-nowrap text-left">
              {item.label}
            </span>
          ) : null}
        </motion.button>

        <AnimatePresence initial={false}>
          {item.children && isSidebarOpen && isExpanded ? (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="mt-2 flex flex-col gap-2 overflow-hidden pl-12 text-sm text-muted-foreground"
            >
              {item.children.map((child) => (
                <span
                  key={child.label}
                  className="transition hover:text-sidebar-foreground"
                >
                  {child.label}
                </span>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <SidebarRoot open={isSidebarOpen} setOpen={handleSetOpen} animate>
      <SidebarBody className=" border-r border-border bg-sidebar py-6 h-screen max-h-screen">
      <div className="flex items-center gap-3 px-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
              BW
            </div>
            {isSidebarOpen ? (
              <div className="leading-tight">
                <p className="text-sm font-semibold text-sidebar-foreground">ByeWind</p>
              </div>
            ) : null}
          </div>
        <ScrollArea className=" h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]">
          

          <div className="mt-7 flex-1 space-y-6 pr-1 px-5">
            {navSections.map((section) => (
              <div key={section.title} className="space-y-3">
                {isSidebarOpen ? (
                  section.title === "Favorites" ? (
                    <div className="flex items-center gap-8 text-sm text-muted-foreground ">
                      <span>Favorites</span>
                      <span className="text-muted-foreground ">Recently</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-8 text-sm text-muted-foreground">
                      {section.title}
                    </div>
                  )
                ) : null}
                <div className="space-y-2">
                  {section.items.map((item) =>
                    renderNavItem(item, section.title)
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SidebarBody>
    </SidebarRoot>
  );
};

export default Sidebar;
