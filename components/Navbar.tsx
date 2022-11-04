"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { ThemeToggleButton } from "./ThemeToggleButton";

type NavLink = {
  href: string;
  title: string;
};

const navLinks: NavLink[] = [
  { href: "/#home", title: "home" },
  { href: "/#projects", title: "projects" },
  { href: "/#about", title: "about" },
  { href: "/#contact", title: "contact" },
];

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [heightMode, setHeightMode] = useState<"h-0" | "h-auto">("h-0");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleMobileMenuToggle = async () => {
    const curr = showMobileMenu;
    if (curr === false) {
      setHeightMode("h-auto");
      setShowMobileMenu(true);
      return;
    }
    setShowMobileMenu(false);
    setTimeout(() => setHeightMode("h-0"), 500);
  };

  return (
    <header className="w-screen flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="flex-grow font-nunito text-lg md:text-2xl lg:text-3xl">
          joshua ibrom
        </h2>

        <div className="flex flex-row items-center gap-2">
          <ThemeToggleButton />
          <button
            className="block md:hidden p-1 border border-stone-800 dark:border-stone-100 rounded-lg hover:rounded-2xl hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-200 transition-all"
            onClick={() => {
              handleMobileMenuToggle();
            }}
          >
            <MdMenu size={28} />
          </button>
        </div>
      </div>
      <nav className="hidden md:flex flex-row gap-4 lg:gap-8">
        {navLinks.map((l, i) => (
          <Link
            href={l.href}
            key={i}
            className="font-nunito text-lg md:text-xl lg:text-2xl hover:text-fuchsia-500 hover:underline transition-all"
          >
            {l.title}
          </Link>
        ))}
      </nav>

      <nav
        className={`flex md:hidden flex-col gap-2 transition-transform duration-500 overflow-hidden ${
          showMobileMenu ? "scale-100" : "scale-0"
        } ${heightMode}`}
        ref={mobileMenuRef}
      >
        {navLinks.map((l, i) => (
          <Link
            href={l.href}
            key={i}
            className="font-nunito text-lg text-fuchsia-800 dark:text-fuchsia-500 bg-stone-300 dark:bg-stone-900 px-2 py-1 rounded-md"
          >
            {l.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
