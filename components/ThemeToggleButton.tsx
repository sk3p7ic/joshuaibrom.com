"use client";

export const ThemeToggleButton = () => {
  const handleClick = () => {
    // Not exactly the most React-y way to do things, but it works quite well :)
    document.getElementsByTagName("html").item(0)?.classList.toggle("dark");
  };

  return <button onClick={() => handleClick()}>Toggle</button>;
};
