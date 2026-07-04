import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Settings,
} from "@lucide/svelte";

export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/students",
    icon: GraduationCap,
  },
  {
    title: "Books",
    href: "/books",
    icon: BookOpen,
  },
  {
    title: "Results",
    href: "/results",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];