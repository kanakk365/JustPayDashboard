"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  IconBell,
  IconClock,
  IconMenu,
  IconSearch,
  IconStar,
  IconSun,
} from "@/components/icons";
import { useSidebarStore } from "@/store/sidebarStore";
import { useNotificationPanelStore } from "@/store/notificationPanelStore";
import { useTheme } from "@/components/providers/theme-provider";
import { Moon } from "lucide-react";

type NavbarProps = {
  sectionLabel: string;
  pageLabel: string;
};

const Navbar = ({ sectionLabel, pageLabel }: NavbarProps) => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const toggleNotifications = useNotificationPanelStore((state) => state.toggle);
  
  const [animatingIcons, setAnimatingIcons] = useState<Set<string>>(new Set());
  const { theme, toggleTheme, isLoaded } = useTheme();

  const themeIcon = useMemo(
    () => (theme === "dark" ? <Moon className="h-5 w-5" /> : <IconSun />),
    [theme]
  );

  const triggerAnimation = (iconName: string, callback?: () => void) => {
    setAnimatingIcons((prev) => new Set(prev).add(iconName));
    if (callback) callback();
    
    setTimeout(() => {
      setAnimatingIcons((prev) => {
        const newSet = new Set(prev);
        newSet.delete(iconName);
        return newSet;
      });
    }, 600);
  };

  const isAnimating = (iconName: string) => animatingIcons.has(iconName);

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-8 pl-4">
      <div className="flex items-center gap-3">
        <motion.button
          type="button"
          onClick={() => {
            triggerAnimation("menu-left", toggleSidebar);
          }}
          whileTap={{ scale: 0.9 }}
          className="grid h-11 w-11 cursor-pointer place-items-center text-foreground transition"
        >
          <span className="sr-only">Toggle sidebar</span>
          <IconMenu />
        </motion.button>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <IconStar />
          <span className="text-neutral-400">{sectionLabel}</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{pageLabel}</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <motion.div
              animate={isAnimating("search") ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <IconSearch />
            </motion.div>
          </span>
          <input
            type="search"
            placeholder="Search"
            onClick={() => triggerAnimation("search")}
            className="h-10 w-60 rounded-lg bg-muted pl-10 pr-20 text-sm text-foreground outline-none transition focus:border-primary"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
            <span className="text-muted-foreground">⌘/</span>
          </span>
        </div>
        <motion.button
          onClick={() => triggerAnimation("clock")}
          animate={isAnimating("clock") ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid place-items-center text-foreground transition"
        >
          <IconClock />
        </motion.button>
        <motion.button
          onClick={() =>
            triggerAnimation("theme", () => {
              if (isLoaded) {
                toggleTheme();
              }
            })
          }
          animate={isAnimating("theme") ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid place-items-center text-foreground transition"
          aria-label="Toggle theme"
        >
          {themeIcon}
        </motion.button>
        <motion.button
          type="button"
          onClick={() => {
            triggerAnimation("bell", toggleNotifications);
          }}
          animate={isAnimating("bell") ? { x: [-2, 2, 0] } : { x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid place-items-center text-foreground transition cursor-pointer"
        >
          <span className="sr-only">Toggle notifications panel</span>
          <IconBell />
        </motion.button>
        <motion.button
          type="button"
          onClick={() => {
            triggerAnimation("menu-right", toggleSidebar);
          }}
          whileTap={{ scale: 0.9 }}
          className="grid place-items-center text-foreground transition"
        >
          <span className="sr-only">Toggle sidebar</span>
          <IconMenu />
        </motion.button>
      </div>
    </header>
  );
};

export default Navbar;
