import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="w-screen flex flex-col md:flex-row md:justify-between px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4">
      <h2>joshua ibrom</h2>

      <nav className="hidden md:flex flex-row gap-4 lg:gap-8">
        <Link href="/#home">home</Link>
        <Link href="/#projects">projects</Link>
        <Link href="/#about">about</Link>
        <Link href="/#contact">contact</Link>
      </nav>

      <nav className="flex md:hidden flex-col gap-2">
        <Link href="/#home">home</Link>
        <Link href="/#projects">projects</Link>
        <Link href="/#about">about</Link>
        <Link href="/#contact">contact</Link>
      </nav>
    </header>
  );
};
