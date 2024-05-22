import { Hero } from "@/components/main/Hero";
import { NavbarDemo } from "@/components/main/Navbar";
import { Playground } from "@/components/main/Playground";
import { TodoSection } from "@/components/main/TodoSection";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MenuItem } from "@/components/ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark">
      <NavbarDemo />
      <Hero />
      {/* <TodoSection /> */}
      <Playground />
    </main>
  );
}
