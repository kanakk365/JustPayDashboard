import {
  IconBag,
  IconBriefcase,
  IconChat,
  IconDot,
  IconDocument,
  IconGrid,
  IconLayers,
  IconPlay,
  IconSettings,
  IconUser,
} from "@/components/icons";
import type { NavSection } from "./types";

export const navSections: NavSection[] = [
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

export const getInitialActiveItemKey = (pathname: string) => {
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
