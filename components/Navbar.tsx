import Link from "next/link";
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
  return (
    <header className="w-screen flex flex-col md:flex-row md:justify-between px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4">
      <h2>joshua ibrom</h2>

      <div className="flex flex-col md:flex-row gap-2">
        <ThemeToggleButton />
        <nav className="hidden md:flex flex-row gap-4 lg:gap-8">
          {navLinks.map((l, i) => (
            <Link
              href={l.href}
              key={i}
              className="hover:text-fuchsia-500 hover:underline transition-all"
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <nav className="flex md:hidden flex-col gap-2">
          {navLinks.map((l, i) => (
            <Link href={l.href} key={i}>
              {l.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
