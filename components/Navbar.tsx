"use client";
import { useState, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { ThemeToggleButton } from "./ThemeToggleButton";

type NavLink = {
  id: string;
  title: string;
};

const navLinks: NavLink[] = [
  { id: "home", title: "home" },
  { id: "projects", title: "projects" },
  { id: "about", title: "about" },
  { id: "socials", title: "socials" },
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-stone-100 dark:bg-stone-800 w-screen flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4 transition-colors duration-1000">
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
          <button
            onClick={() => scrollTo(l.id)}
            key={i}
            className="font-nunito text-lg md:text-xl lg:text-2xl hover:text-amber-800 dark:hover:text-fuchsia-500 hover:underline transition-all"
          >
            {l.title}
          </button>
        ))}
      </nav>

      <nav
        className={`flex md:hidden flex-col gap-2 transition-transform duration-500 overflow-hidden ${
          showMobileMenu ? "scale-100" : "scale-0"
        } ${heightMode}`}
        ref={mobileMenuRef}
      >
        {navLinks.map((l, i) => (
          <button
            onClick={() => scrollTo(l.id)}
            key={i}
            className="font-nunito text-lg text-stone-800 dark:text-fuchsia-500 bg-amber-500 dark:bg-stone-900 px-2 py-1 rounded-md"
          >
            {l.title}
          </button>
        ))}
      </nav>
    </header>
  );
};
